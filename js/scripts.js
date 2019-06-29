document.getElementById('show-password').addEventListener('click', function(event){
	event.preventDefault();
	showPassword();
});

function showPassword() {
	var type = document.getElementById('password').type;
	var value = document.getElementById('password').value;
	if (type == 'password') {
		document.getElementById('password').type = 'text';
		document.getElementById('show-password').innerHTML = 'Hide';
	} else {
		document.getElementById('password').type = 'password';
		document.getElementById('show-password').innerHTML = 'Show';
	}
};



function showMenu() {
	document.getElementById('hidden-menu').classList.toggle('show');
	console.log('here');
};