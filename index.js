// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email')

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



// const ValidateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'username is required');
//     } else {
//         setSuccess(username);
//     }


//     if(emailValue === '') {
//         setError(email, 'email is rrequired');
//     }
// }

function handleFormSubmission (event) {
    event.preventDefault();
    console.log("working");
    let email = document.forms["contact"]["email"].value;
    console.log(email);
if (document.forms["contact"]["fullname"].value == "") {
    document.getElementById("error").innerHTML = "You must enter your name"
} else if (document.forms["contact"]["email"].value == "") {
    document.getElementById("error").innerHTML = "You must enter our email"
} else if () {
    document.getElementById("error").innerHTML = "You have entered an invalid email";
}else {
    document.getElementById("error").innerHTML = "";
}

}
