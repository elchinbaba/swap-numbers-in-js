function swap(number1, number2){
    let temp = number1;
    number1 = number2;
    number2 = temp;
}

document.getElementById('btn').onclick = function() {
    let number1 = document.getElementById('first-number').value;
    let number2 = document.getElementById('second-number').value;
    swap(number1, number2);
    document.getElementById('result').innerHTML = `number1 = ${number2}, number2 = ${number1}`;
};