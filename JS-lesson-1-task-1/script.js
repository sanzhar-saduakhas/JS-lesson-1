let firstNum = prompt('Enter first number:');
let secondNum = prompt('Enter second number:');

if (!parseInt(firstNum, 10) || !parseInt(secondNum, 10)){
	console.log('Некорректный ввод!');
}
else{
	firstNum = parseInt(firstNum, 10);
	secondNum = parseInt(secondNum, 10);
	console.log(firstNum.toString(secondNum));
}