let display = document.getElementById("display");
let justEvaluated = false;

function adjustFontSize() {
    const maxFontSize = 50;
    const minFontSize = 20;
    let fontSize = maxFontSize;

    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
        fontSize--;
        display.style.fontSize = fontSize + "px";
    }
}


function val(anothervalue) {
    if (justEvaluated) {
        display.value = "";
        justEvaluated = false;
    }
    display.value += anothervalue;
    adjustFontSize(); 
}

function operator(newv) {
    if (justEvaluated) {
        justEvaluated = false;
    }
    display.value += newv;
    adjustFontSize(); 
}

function cleardisplay() {
    display.value = "";
    display.style.fontSize = "50px";  
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function equal() {
    try {
        let expression = display.value
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)')  
            .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)') 
            .replace(/(\d+(\.\d+)?)\^2/g, 'Math.pow($1, 2)')
            .replace(/%/g, '/100');

        display.value = eval(expression);
        justEvaluated = true;
        adjustFontSize(); 
    } catch (err) {
        display.value = "Error";
    }
}
