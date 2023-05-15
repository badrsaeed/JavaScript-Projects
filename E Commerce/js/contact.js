var submit = document.getElementsByClassName("btn")[0];
Name = document.getElementsByClassName("name")[0];
Name_err = document.getElementsByClassName("name-err")[0];
email = document.getElementsByClassName("email")[0];
email_err = document.getElementsByClassName("email-err")[0];
comment = document.getElementsByClassName("comment")[0];
comment_err = document.getElementsByClassName("comment-err")[0];

submit.addEventListener("click", (e) => {
  let nameValid = false;
  let emailValid = false;
  let commentValid = false;

  if (Name.value.length === 0) {
    Name_err.style.display = "inline";
    nameValid = false;
    e.preventDefault();
  } else {
    Name_err.style.display = "none";
    nameValid = true;
  }
  if (email.value.length === 0) {
    email_err.style.display = "inline";
    emailValid = false;
    e.preventDefault();
  } else {
    email_err.style.display = "none";
    emailValid = true;
  }
  if (comment.value.length === 0) {
    comment_err.style.display = "block";
    commentValid = false;
    e.preventDefault();
  } else {
    comment_err.style.display = "none";
    commentValid = true;
  }
  if (nameValid && emailValid && commentValid) {
  } else {
    e.preventDefault();
  }
});

let cartNumber = document.getElementById("items-number");
let CartCount = sessionStorage.getItem("counter") ?? 0;
cartNumber.innerHTML = CartCount;
