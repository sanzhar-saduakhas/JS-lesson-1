let firstNum = prompt('Enter first number:');

if (!parseInt(firstNum, 10)){
	console.log('Некорректный ввод!');
} else{
	let secondNum = prompt('Enter second number:');
	
	if (!parseInt(secondNum, 10)){
		console.log('Некорректный ввод!');
	}
	else{
		firstNum = parseInt(firstNum, 10);
		secondNum = parseInt(secondNum, 10);
		console.log(firstNum / secondNum);
	}
}