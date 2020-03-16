// Your JavaScript goes here.
debugger;
window.addEventListener('load', function() {
	let button = document.getElementById('button');
	button.addEventListener('click', function() {
		let toggle_me = document.getElementsByClassName('toggle_me');
		for (i = 0; i < toggle_me.length; i++) {
			if (toggle_me[i].style.display === 'none') {
				toggle_me[i].style.display = 'block';
			} else {
				toggle_me[i].style.display = 'none';
			}
		}
	});
});
