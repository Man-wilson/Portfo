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
    const phoneValue = phone.value;
    console.log(phoneValue);
     
    if(usernameValue === '') {
        window.alert("username is required")
    } else if(phoneValue === '') {
        window.alert('phone number is required');
    }
    else if(emailValue === '') {
        window.alert('email is rrequired');
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)))
    {
        alert("You have entered an invalid email address!")
    }
      
}

$(document).ready(function(){
    $('#icon').click(function(){
        document.getElementById("nav").className = "nav-links"
    });
    $('#nav').click(function(){
        $('ul').toggleClass('')
    });
});


function closeNavbar(){
    document.getElementById("nav").className = "nav-hidden" != "nav-links"
    return;
}



const getBlogs = () => {
    // localStorage.removeItem("blogs");
    var result = localStorage.getItem("test");
     console.log('helloooo')

  //  localStorage.removeItem("blogs")
    

    var fromStorage = localStorage.getItem("blogs");
    var blogsResult = JSON.parse(fromStorage);
    if (blogsResult){
      document.getElementById("blogOutputs").innerHTML = blogsResult.map((item)=>`
    <img src=${item.image} width="200px" />
    <p>${item.title}</p>
    <p>${item.description}</p>
    <button onclick="editBlog(${item.id})">Edit</button>
    `)
    }
    
  }
  
  function handleSubmitBlog(patrick){
    patrick.preventDefault();
    var ourform = document.getElementById("blogInput");
    var title = ourform["title"].value;
    var image = ourform["blogImage"].value;
    var description = ourform["description"].value;
   
    if(localStorage.getItem("blogs") == null){
    let array = [];
      const blog = {
        id:1,
      title,
      image,
      description
    }
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
      getBlogs();
    } else {
      
      let array = JSON.parse(localStorage.getItem("blogs"));
      const blog = {
        id:(array.length+1),
      title,
      image,
      description
    }
      array.push(blog);
      localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
      getBlogs();
    }
  }
  
  const deleteBlog = (blogId) => {
    console.log(blo)
    let array = JSON.parse(localStorage.getItem("blogs"));
    array.map((item)=>{
      if(blogId == item.id){
        item.title = "New Value"
      }
    })
    localStorage.setItem("blogs", JSON.stringify(array));
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
