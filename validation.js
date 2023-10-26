
function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameError = "";
    var phoneError = "";
    var emailError = "";
    var messageError="";

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneRegex = /^[0-9]{10}$/;

    if (name.trim() === "") {
        nameError = "Name is required.";
    }

    if (phone.trim() === "" || !phone.match(phoneRegex)) {
        phoneError = "Please enter a valid 10-digit phone number.";
    }

    if (email.trim() === "" || !email.match(emailRegex)) {
        emailError = "Please enter a valid email address.";
    }

    if (message.trim() === "") {
        messageError = "Message is required.";
    }

    document.getElementById("nameError").textContent = nameError;
    document.getElementById("phoneError").textContent = phoneError;
    document.getElementById("emailError").textContent = emailError;
    document.getElementById("messageError").textContent = messageError;

    if (nameError || phoneError || emailError) {
        return false; // Prevent form submission
    }



    return true; // Allow form submission if all fields are valid
}











































    // let myform = document.querySelector(".f_contact");
    // let  inputname = document.querySelector("#name");
    // let inputphone = document.querySelector("#phone");
    // let inputemail = document.querySelector("#email");
    // let inputmessage = document.querySelector("#message");


    // myform.addEventListener("submit", e =>{
    //     e.preventDefault();
    //     inputValid();



    // } );

    


    // const setError = (element,message) => {
    //     const inputControl = element.parentElement;
    //     const errorAfich = inputControl.querySelector(".error-message");

    //     errorAfich.innterText = message;
    //     inputControl.classList.add("error");
    //     inputControl.classList.remove("success");


    // }; 


    // const setSuccess = (element,message) => {
    //     const inputControl = element.parentElement;
    //     const errorAfich =inputControl.querySelector(".error-message");

    //     errorAfich.innterText = '';
    //     console.log(inputControl)
    //     inputControl.classList.add("success");
    //     inputControl.classList.remove("error");

    // }


    // const textVerify = (text) => {
    //     const regex = /^[a-zA-Z]{3,}$/;
    //     return regex.test(text);
    // }

    // const emailVerify = (email) => {
    //     const regex = /^[a-z0-9]+@[a-z]{3,}\.[a-z\.]{2,5}$/;
    //     return regex.test(email);
    // }

    // const phoneVerify = (phone) => {
    //     const regex = /^[0-9]{10}$/;
    //     return regex.test(phone);
    // }


    // const inputValid = () => {
    //     const nameValue = inputname.value.trim();
    //     const phoneValue = inputphone.value.trim();
    //     const emailValue = inputemail.value.trim();
    //     const message = inputmessage.value.trim();

    //     console.log(inputValid)


    //     if(nameValue === ''){

    //         setError(inputname, 'Username is required');
    //     }
        
        

    //     else if (!textVerify(nameValue)) {

    //         setError(inputname, 'provide a valid your username');

    //     } else {

    //         setSuccess(inputname);
    //     }
    //     console.log(setError(inputname, 'Username is required'));
    // }

    








    
   
    
              