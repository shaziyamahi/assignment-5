document.getElementById('switch-to-register').addEventListener('click', function() {
    document.getElementById('login-container').style.transform = 'rotateY(180deg)';
    document.getElementById('register-container').style.transform = 'rotateY(0deg)';
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('login-container').style.transform = 'rotateY(0deg)';
    document.getElementById('register-container').style.transform = 'rotateY(180deg)';
});
