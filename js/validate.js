
// Adding the js styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

 

form.addEventListener('submit' , (e) => {
  e.preventDefault();

  checkInput();
}) 

function checkInput(){
  // Get the values from the input

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // usernameb validation
  if(usernameValue === ''){
    
    setErrorFor(username, 'Username can not be blank');
  }
  else if(usernameValue.length < 6) {
      setErrorFor(username, 'Username must be at least 6 characters long');
  }
  else {
    setSuccessFor(username);
  }

  // email validation
  if(emailValue === ''){
    setErrorFor(email, 'Email can not be blank');
  }
  else{
    setSuccessFor(email);
  }

  // password validation
  if(passwordValue === ''){
    setErrorFor(password, 'Password can not be blank');
  }

  else if(passwordValue.length < 8) {
    setErrorFor(password, 'Password must be at least 8 characters long');
}
  else{
    setSuccessFor(password);
  }

  // Confirm password2 validation
  if(password2Value === ''){
    setErrorFor(password2, ' Confirm password can not be blank');
  }

  else if(passwordValue !== password2Value ) {
    setErrorFor(password2, 'Password not the same');
}
  else{
    setSuccessFor(password2);
  }

}



function setErrorFor(input, message){
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // Add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement; //.form-control

  // Add error class
  formControl.className = 'form-control success';
}

// function myFunc(){
  // window.location = "Assessment.html";
  
}