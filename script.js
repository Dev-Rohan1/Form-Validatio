let nameError = document.querySelector(".name-error");
let numberError = document.querySelector(".number-error");
let emailError = document.querySelector(".email-error");
let messageError = document.querySelector(".message-error");
let submitError = document.querySelector(".submit-error");
let submitBtn = document.querySelector(".submit-btn");

let nameValidation = () => {
  let name = document.querySelector(".contact-name").value;

  if (name.length === 0) {
    nameError.innerText = "name is required";
    return false;
  }

  if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    nameError.innerText = "write full name";
    return false;
  }
  nameError.innerHTML = `<span id="valid" class="material-symbols-outlined">check_circle</span>`;
  return true;
};

let numbrValidation = () => {
  let number = document.querySelector(".contact-number").value;

  if (number.length === 0) {
    numberError.innerText = "phone no is required";
    return false;
  }
  if (number !== 10) {
    numberError.innerText = "phone no should be 10 digit";
  }
  if (!number.match(/^[0-9]{10}$/)) {
    numberError.innerText = "phone no is required";
    return false;
  }

  numberError.innerHTML = `<span id="valid" class="material-symbols-outlined">check_circle</span>`;
  return true;
};

let emailValidation = () => {
  let email = document.querySelector(".contact-email").value;

  if (email.length === 0) {
    emailError.innerText = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerText = "Email invalid";
    return false;
  }

  emailError.innerHTML = `<span id="valid" class="material-symbols-outlined">check_circle</span>`;
  return true;
};

let messageValidation = () => {
  let message = document.querySelector(".contact-message").value;
  let required = 30;
  let left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = `${left} more character required`;
    return false;
  }

  messageError.innerHTML = `<span id="valid" class="material-symbols-outlined">check_circle</span>`;
  return true;
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", () => {
  if (
    nameValidation() ||
    numbrValidation() ||
    emailValidation() ||
    messageValidation()
  ) {
    messageError.style.display = "block";
    submitError.innerText = "Thank you for submit the form";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
});
