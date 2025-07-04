const passwordBox = document.getElementById("password");
const generatePasswordBtn = document.getElementById("generate-btn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

const allChars = upperCase + lowerCase + numbers;

generatePasswordBtn.addEventListener("click", () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});


const display = document.getElementById("display");
const copyIcon = display.querySelector("img");

copyIcon.addEventListener("click", () => {
    passwordBox.select()
    document.execCommand("copy")
})