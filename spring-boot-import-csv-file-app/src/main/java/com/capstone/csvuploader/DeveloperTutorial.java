package com.capstone.csvuploader;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "emp")
public class DeveloperTutorial {

	  @Id
	  @Column(name = "id")
	  private long id;

	  @Column(name = "title")
	  private String title;

	  @Column(name = "designation")
	  private String designation;



	  public DeveloperTutorial() {

	  }

	  public DeveloperTutorial(long id, String title, String  designation) {
	    this.id = id;
	    this.title = title;
	    this.designation = designation;

	  }

	  public long getId() {
	    return id;
	  }

	  public void setId(long id) {
	    this.id = id;
	  }

	  public String getTitle() {
	    return title;
	  }

	  public void setTitle(String title) {
	    this.title = title;
	  }

	  public String getDesignation() {
	    return designation;
	  }

	  public void setDesignation(String designation) {
	    this.designation= designation;
	  }


	  @Override
	  public String toString() {
	    return "Tutorial [id=" + id + ", title=" + title + ", designation=" + designation + "]";
	  }
	}
