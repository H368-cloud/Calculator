const display = document.querySelector('.screen')

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(input){
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}