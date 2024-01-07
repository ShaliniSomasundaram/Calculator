let outputScreen = document.getElementById("outputscreen");

function display(num){
    outputScreen.value += num;
};

let calculate = () => {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Please enter valid values");
    }
};

let clearInput = () => {
    outputScreen.value = "";
};

let deleteLastChar = () => {
    outputScreen.value = outputScreen.value.slice(0, -1);
};

