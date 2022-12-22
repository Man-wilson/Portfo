const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email')

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     ValidateInputs();
// }); 

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDispaly = inputControl.querrySelector('error');

//     errorDispaly.innerText = message;
//     inputControl.classList.add('error')
//     inputControl.classList.remove('success')
// }


// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDispaly = inputControl.querrySelector('.error');


//     errorDispaly.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };



const ValidateInputs = (event) => {
    event.preventDefault()
    const usernameValue = username.value;
    console.log(usernameValue)
    const emailValue = email.value;
    console.log(emailValue)
     
    if(usernameValue === '') {
        window.alert("username is required")
    } else if(emailValue === '') {
        window.alert('email is rrequired');
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)))
    {
        alert("You have entered an invalid email address!")
    }
      
}

// function handleFormSubmission (event) {
//     event.preventDefault();
//     console.log("working");
//     let email = document.forms["contact"]["email"].value;
//     console.log(email);
// if (document.forms["contact"]["fullname"].value == "") {
//     document.getElementById("error").innerHTML = "You must enter your name"
// } else if (document.forms["contact"]["email"].value == "") {
//     document.getElementById("error").innerHTML = "You must enter our email"
// } else if (document.forms["contact"]["email"].value == "") {
//     document.getElementById("error").innerHTML = "You have entered an invalid email";
// }else {
//     document.getElementById("error").innerHTML = "";
// }

// }

// let email = 'test@gmail.com';
// function validateEmail(email) {
//     const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return regex.test(email)
// }

// if (validateEmail(email)) {
//     console.log('validate Email');
// } else {
//     console.log ('invalid Email');
// }

// const form = document.querySelector('form');
// const email = document.querySelector('#email');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //now validate email
//     if(!email.checkValidity()) {
//         alert (email.validationMessage);
//         console.log('inalid email')
//     }
// });
