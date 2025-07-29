let display = document.getElementById("display");

function val(anothervalue) {
    let newValue = display.value + anothervalue;
    display.value = newValue;
}

function operator(newv){
    let Newval=display.value+newv;
    display.value=Newval;
}

function cleardisplay(){
    display.value ="";
}

function backspace(){
    let v=display.value.slice(0,-1);
    display.value=v;
}


function equal() {
    try {
        let expression = display.value
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/√/g, 'Math.sqrt')
            .replace(/(\d+)\^2/g, 'Math.pow($1, 2)')
            .replace(/%/g, '/100');

        display.value = eval(expression);
    } catch (err) {
        display.value = "Error";
    }
}
