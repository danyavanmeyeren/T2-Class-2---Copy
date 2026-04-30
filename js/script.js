let screen = document.getElementById('result').value;

function display(newValue){
    document.getElementById('result').value += newValue; 
}

function clearScreen(){
    document.getElementById('result').value = "";
}

function calculate(){
    let sum = document.getElementById('result').value;
    let answer = eval(sum); 
    document.getElementById('result').value = answer;
}

