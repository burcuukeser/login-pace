var log = document.getElementById('lgn');
var regis = document.getElementById('rgstr');
var button = document.getElementById('btn');

function register() {
    log.style.left="-400px";
    regis.style.left="50px";
    button.style.left="110px";
}

function login() {
    log.style.left="50px";
    regis.style.left="450px";
    button.style.left="0";
}
