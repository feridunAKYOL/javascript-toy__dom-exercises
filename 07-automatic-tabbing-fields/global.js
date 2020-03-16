// Your JavaScript goes here.
window.addEventListener('load', function() {
	let firstNum = document.getElementById('first');
	let secondNum = document.getElementById('second');
	let thirdNum = document.getElementById('third');
	firstNum.value = '';
	secondNum.value = '';
	thirdNum.value = '';
	firstNum.addEventListener('keyup', function() {
		if (firstNum.value.length === 3) {
			secondNum.focus();
		}
	});
	secondNum.addEventListener('keyup', function() {
		if (secondNum.value.length === 3) {
			thirdNum.focus();
		}
	});
});
