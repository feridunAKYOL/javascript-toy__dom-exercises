window.addEventListener('load', function() {
	let button = document.getElementById('button');
	var divs_to_hide = document.getElementsByClassName('hide_me');
	button.addEventListener('click', function() {
		for (var i = 0; i < divs_to_hide.length; i++) {
			divs_to_hide[i].style.display = 'none';
		}
	});
});
