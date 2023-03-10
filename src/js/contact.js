
document.title = "Contact us | Pokémon ";

const formEl = document.querySelector("#js-form");
const nameEl = document.querySelector("#js-name");
console.log(nameEl);
const emailEl = document.querySelector("#js-email");
const addressEl = document.querySelector("#js-address");
const subjectEl = document.querySelector("#js-subject");
const messageEl = document.querySelector("#js-message");

const nameError = document.querySelector("#js-name-error");
const addressError = document.querySelector("#js-address-error");
const emailError = document.querySelector("#js-email-error");
const subjectError = document.querySelector("#js-subject-error");
const messageError = document.querySelector("#js-message-error");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameEl.value;
  const email = emailEl.value;
  const address = addressEl.value;
  const subject = subjectEl.value;
  const message = messageEl.value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  if (email === "") {
    alert("Please enter an email");
    return;
  }

  if (address === "") {
    alert("Please enter an address");
    return;
  }
  if (address.length < 25) {
    alert("Address must be more than 25 characters");
    return;
  }

  if (subject === "") {
    alert("Please enter a subject");
    return;
  }

  if (subject.length < 10) {
    alert("Subject must be more than 10 characters");
    return;
  }

  if (message === "") {
    alert("Please enter a message");
    return;
  }

  alert("Form submitted");

  nameEl.value = "";
  emailEl.value = "";
  addressEl.value = "";
  subjectEl.value = "";
  messageEl.value = "";
});



nameEl.addEventListener("blur", (event) => {
  const name = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z]{2,}/;

  if (!minLengthRegex.test(name)) {
    nameError.innerHTML =
      "Name must be at least 2 characters long and must be letters only";
  } else {
    nameError.innerHTML = "";
  }
});



addressEl.addEventListener("blur", (event) => {
  const address = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{25,}/g;

  if (!minLengthRegex.test(address)) {
    addressError.innerHTML = "Address must be at least 25 characters long";
  } else {
    addressError.innerHTML = "";
  }
});

emailEl.addEventListener("blur", (event) => {
  const email = event.target.value.trim();

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!emailRegex.test(email)) {
    console.log("feil");
    emailError.innerHTML = "Email is not valid";
  } else {
    emailError.innerHTML = "";
  }
});

subjectEl.addEventListener("blur", (event) => {
  const subject = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{10,}/g;

  if (!minLengthRegex.test(subject)) {
    subjectError.innerHTML = "Subject must be at least 10 characters long";
  } else {
    subjectError.innerHTML = "";
  }
});

messageEl.addEventListener("blur", (event) => {
  const message = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{10,}/g;

  if (!minLengthRegex.test(message)) {
    messageError.innerHTML = "Message must be at least 10 characters long";
  } else {
    messageError.innerHTML = "";
  }
});






