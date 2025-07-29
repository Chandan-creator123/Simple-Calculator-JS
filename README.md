# Simple-Calculator-JS
# 📟 JavaScript Calculator

A beautiful, responsive calculator built using **HTML**, **CSS**, and **JavaScript** — featuring basic and scientific operations like square root, power, percent, brackets, and more.

---

## 🌐 Live Preview

> Add GitHub Pages or Netlify/Vercel deployment link here if available.

[🔗 Live Demo](https://your-live-link-here.com)

---

## 🖼️ Screenshots

### 🧮 Calculator UI

![Calculator UI](screenshots/calculator-ui.png)

### 🌟 Favicon Preview

![Favicon](screenshots/favicon.png)

---

## 🚀 Features

- Basic arithmetic operations: `+`, `-`, `×`, `÷`
- Advanced functions: `x²`, `√`, `%`, `()`
- AC (clear) and backspace (`⌫`)
- Result cleared on next input after `=`
- Rounded button design with soft shadows
- Responsive layout using CSS Grid
- Error-safe evaluation logic
- Favicon for browser tab

---

## 🧠 Tech Stack

| Language     | Purpose          |
|--------------|------------------|
| HTML         | Structure         |
| CSS          | Styling           |
| JavaScript   | Calculator logic  |

---

## 🧾 How It Works

- Numbers and operators are entered using `val()` and `operator()` functions.
- The `equal()` function safely evaluates expressions with `eval()` after replacing symbols (`x`, `÷`, `√`, `^2`, `%`).
- `justEvaluated` flag ensures display clears correctly after results.
- Layout uses CSS Grid to arrange buttons neatly.

---

## 📁 Project Structure

calculator/
│
├── index.html # Main layout
├── style.css # Styling
├── script.js # Calculator logic
├── favicon.ico # Tab icon
└── screenshots/ # UI images
├── calculator-ui.png
└── favicon.png



---

## 🔧 How to Use Locally

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/calculator.git
