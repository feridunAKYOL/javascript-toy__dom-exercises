// Your JavaScript goes here.
window.addEventListener('load', function() {
	let button = document.getElementById('toggle_button');
	button.addEventListener('click', function() {
		let lis = document.querySelectorAll('.second_five li');
		for (i = 0; i < lis.length; i++) {
			if (lis[i].style.display === 'none') {
				lis[i].style.display = 'list-item';
			} else {
				lis[i].style.display = 'none';
			}
		}
	});
});
