package com.capstone.csvuploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import com.itextpdf.html2pdf.HtmlConverter;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.PdfWriter;
@CrossOrigin("http://localhost:8080")
@Controller
public class PdfGeneratorController {

    @Autowired
    private DeveloperTutorialRepository developerTutorialRepository;

    @GetMapping("/generate/pdf2")
    public ResponseEntity<byte[]> PdfGenerator2(@RequestParam Long id) {

        Optional<DeveloperTutorial> tutorialOptional = developerTutorialRepository.findById(id);
        if (!tutorialOptional.isPresent()) {
            // Tutorial not found, return not found response
            return ResponseEntity.notFound().build();
        }

        DeveloperTutorial tutorial = tutorialOptional.get();
        String title = tutorial.getTitle();
        String designation = tutorial.getDesignation();

        // Generate PDF using retrieved data
        String htmlContent = generateHtmlContent(title, designation);
        ByteArrayOutputStream outputStream = generatePdf(htmlContent);
        String filename = title + ".pdf";

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                .body(outputStream.toByteArray());
    }

    @PostMapping("/generate/pdf/batch")
    public ResponseEntity<byte[]> downloadPdfBatch(@RequestBody List<Long> ids) {
        List<DeveloperTutorial> tutorials = developerTutorialRepository.findAllById(ids);
        
        if (tutorials.isEmpty()) {
            // No tutorials found for the given IDs, return not found response
            return ResponseEntity.notFound().build();
        }

        // Generate PDF for each tutorial
        List<ByteArrayOutputStream> outputStreams = new ArrayList<>();
        for (DeveloperTutorial tutorial : tutorials) {
            String title = tutorial.getTitle();
            String designation = tutorial.getDesignation();
            String htmlContent = generateHtmlContent(title, designation);
            ByteArrayOutputStream outputStream = generatePdf(htmlContent);
            outputStreams.add(outputStream);
        }

        // Combine PDFs into a single ByteArrayOutputStream
        ByteArrayOutputStream combinedPdf = combinePdfs(outputStreams);

        return ResponseEntity
                .ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=offer_letters_batch.pdf")
                .body(combinedPdf.toByteArray());
    }

    private ByteArrayOutputStream generatePdf(String htmlContent) {
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        HtmlConverter.convertToPdf(htmlContent, outputStream);
        return outputStream;
    }


    private String generateHtmlContent(String title, String designation) {
        ClassLoaderTemplateResolver templateResolver = new ClassLoaderTemplateResolver();
        templateResolver.setPrefix("templates/");
        templateResolver.setSuffix(".html");
        templateResolver.setTemplateMode(TemplateMode.HTML);

        TemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);

        Context context = new Context();
        context.setVariable("title", title);
        context.setVariable("designation", designation);

        return templateEngine.process("pdf-form", context);
    }

    private ByteArrayOutputStream combinePdfs(List<ByteArrayOutputStream> outputStreams) {
        ByteArrayOutputStream combinedPdf = new ByteArrayOutputStream();
        try (PdfWriter writer = new PdfWriter(combinedPdf);
             PdfDocument pdf = new PdfDocument(writer)) {
            for (ByteArrayOutputStream outputStream : outputStreams) {
                PdfReader reader = new PdfReader(new ByteArrayInputStream(outputStream.toByteArray()));
                PdfDocument sourcePdf = new PdfDocument(reader);
                sourcePdf.copyPagesTo(1, sourcePdf.getNumberOfPages(), pdf);
                sourcePdf.close();
            }
        } catch (IOException e) {
            // Handle exception
        }
        return combinedPdf;
    }
}