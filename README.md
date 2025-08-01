# 🧮 JavaScript Calculator

A responsive, modern calculator built using **HTML**, **CSS**, and **JavaScript**. This project mimics the layout and behavior of a real-world scientific calculator, supporting basic arithmetic operations, square roots, percentages, and exponents.

---

## 📸 Screenshots

| Desktop View | Expression Overflow |
|--------------|----------------------|
| ![Main UI](images/screenshot1.png) | ![Overflow Shrink](images/screenshot2.png) |


---

## 🎯 Features

- ✅ Clean and responsive layout
- ✅ Styled display with auto-shrinking font for long expressions
- ✅ Blinking cursor effect (optional, fake)
- ✅ Supports:
  - Addition, Subtraction, Multiplication, Division
  - Square root (`√x`)
  - Squaring a number (`x²`)
  - Percentage (`%`)
  - Backspace and Clear All (`AC`, `⌫`)
- ✅ Operable only via on-screen buttons (user typing disabled)
- ✅ Input sanitization with safe evaluation

---

## ⚙️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5      | Markup structure |
| CSS3       | Styling and layout |
| JavaScript | Logic and interaction |

---

## 🗂️ Folder Structure

calculator/
│
├── index.html # Main HTML file
├── style.css # All styling for layout and buttons
├── script.js # Calculator logic and dynamic functions
├── favicon/ # Favicon images
│ └── finance.png
├── images/ # Screenshots for README (optional)
│ ├── screenshot1.png
│ └── screenshot2.png


---

## 🚀 How to Use

1. **Clone the repository** or download the ZIP:
   ```bash
   git clone https://github.com/your-username/js-calculator.git


2.Open the project folder and run index.html in your browser:

  Double-click index.html, or
  
  Right-click > Open With > Your Browser
  

3.Use the calculator:

  Click number and operator buttons.
  
  Use √, x², %, AC, and ⌫ as needed.
  
  Press = to see the result.


📁 Example Code Snippet (JavaScript)
function equal() {
    try {
        let expression = display.value
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')
            .replace(/(\d+)\^2/g, 'Math.pow($1, 2)')
            .replace(/%/g, '/100');

        display.value = eval(expression);
        adjustFontSize();
    } catch {
        display.value = "Error";
    }
}
