var number1 =Number(document.getElementById("number1").value)
var number2 =Number(document.getElementById("number2").value)
var actual_answer = number1 + number2;
console.log(actual_answer);
var get_answer = document.getElementById("answer").value;
console.log(get_answer)
function Check(){
if(get_answer == actual_answer){
    document.getElementById("result_label").innerHTML = "Congradulations! You solved the problem!";
}
else if(get_answer != actual_answer){
    document.getElementById("result_label").innerHTML = "So close! Try again!";
}
}
document.getElementById("result_label").innerHTML = "";
function Back(){
window.location = "homeroom.html";
};