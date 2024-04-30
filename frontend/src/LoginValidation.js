// function Validation(values){
//     let error={}
//     // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

//     const email_pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
//     // Minimum eight characters, at least one letter, one number and one special character:
//     const password_pattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

//     if(values.email === "") {
//         error.email= "Email should not be empty"
//     }
//     else if(!email_pattern.test(values.email)) {
//         error.email= "Email didn't match"
//     }
//     else {
//         error.email = ""
//     }

//     if(values.password === "") {
//         error.password = "Password should not be empty"
//     }
//     else if(!password_pattern.test(values.password)) {
//         error.password = "Password didn't match"
//         alert(values.password)
//     }
//     else {
//         error.password= ""
//     }
//     return error;
// }

// export default Validation;





function Validation(values) {

    let error = {}

    const email_pattern= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    // Minimum eight characters, at least one letter, one number and one special character:
    const password_pattern= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(values.email === "") {        error.email = "Name should not be empty"    }     else if(!email_pattern.test(values.email)) {        error.email = "Email Didn't match"    }    else {        error.email = ""    }
    if(values.password === "") {        error.password = "Password should not be empty"    }     else if(!password_pattern.test(values.password)) {        error.password = "Password didn't match"    }     else {        error.password = ""    }    return error;}
export default Validation;
