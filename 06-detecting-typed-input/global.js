// Your JavaScript goes here.
window.addEventListener('load', function() {
	let letter = document.getElementById('full_name');

	letter.addEventListener('keyup', function() {
		let text = document.getElementById('greeting');
		text.textContent = 'Hello there, ' + letter.value + '!';
	});
});
