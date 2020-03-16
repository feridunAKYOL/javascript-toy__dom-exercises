window.addEventListener('load', function() {
	let show_button = document.getElementById('button');
	show_button.addEventListener('click', function() {
		let show_class = document.getElementsByClassName('show_me');
		for (let i = 0; i < show_class.length; i++) {
			show_class[i].style.display = 'inline';
			show_button.style.display = 'none';
		}
	});
});
