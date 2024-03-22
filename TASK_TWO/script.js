
   let UserSubmit = document.getElementById("UserSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    let UserName = document.getElementById("UserName").value.trim();
    let UserEmail = document.getElementById("UserEmail").value;
    let UserCell = document.getElementById("UserCell").value;
    let UserPassword = document.getElementById("UserPassword").value;
    let isValidName = validateUserName(UserName);
    let isValidEmail = validateUserEmail(UserEmail);
    let isValidCell = validateUserCell(UserCell);
    let isValidPassword = validateUserPassword(UserPassword);
    if (isValidName && isValidEmail && isValidCell && isValidPassword) 
    {
      alert("User Details Submitted");
      document.getElementById("UserInput").reset();
    } else alert("Input Valid User Details");
    
  });

function validateUserName(Name) {
  if (typeof Name !== "string") {
    return false;
  }

  if (Name.length <= 3) {
    return false;
  }
  return true;
}

function validateUserEmail(Email) {
  if (typeof Email !== "string") {
    return false;
  }
  if (Email.includes("@") == false) {
    return false;
  }
  if (Email.includes(".") == false) {
    return false;
  }
  return true;
}

function validateUserCell(Number) {
  if (typeof Number !== "string") {
    
    return false;
  }

  if (Number.length !== 10) {
    return false;
  }
  return true;
}

function validateUserPassword(Password) {
  if (typeof Password !== "string") {
    return false;
  }

  if (Password.length !== 8) {
    return false;
  } 
  return true;
}
