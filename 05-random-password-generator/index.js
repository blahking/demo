const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIcon.addEventListener("click", () => {
  copyPassword();

  if (inputEl.value) {
    alertContainer.classList.remove("active");

    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 15;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    password += chars[randomNum];
  }

  inputEl.value = password;
  alertContainer.innerText = password + "  Copied";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999);

  navigator.clipboard.writeText(inputEl.value);
}
