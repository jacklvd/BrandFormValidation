// to target all classes and id from HTML 
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// declare variables
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

// to prevent open the link/pages
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // excute funtion
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});

// id: target id, serial: target classes[failure icon], message: error message
let engine = (id, serial, message) => {
  if (id.value.trim() === "") { // to remove extra white space
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};