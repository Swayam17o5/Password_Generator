# 🔐 Password Generator

A simple JavaScript-based password generator that creates a random secure password and allows you to copy it with one click.

## 🚀 Features

- Generates a 12-character strong password
- Includes at least:
  - One uppercase letter
  - One lowercase letter
  - One digit
- Click-to-copy functionality
- Clean and minimal UI



## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## 📁 Project Structure

password-generator/
├── index.html
├── style.css
├── script.js
└── README.md

css
Copy
Edit

## 💡 How It Works

1. Click the "Generate Password" button.
2. A password is generated and displayed in the input box.
3. Click the copy icon to copy the password to your clipboard.

## 📋 Example HTML Element IDs

- `#password` — input box where password is shown.
- `#generate-btn` — button to generate password.
- `#display img` — image/icon that copies password to clipboard on click.

## ⚠️ Note

This project uses `document.execCommand("copy")`, which is deprecated in some browsers. For modern projects, use:

```js
navigator.clipboard.writeText(password);
✅ To-Do / Improvements
 Add special characters (symbols)

 Add password strength indicator

 Allow user to choose password length

 Use modern Clipboard API

📄 License
MIT License. Feel free to use and modify!

yaml
Copy
Edit

---

