document.getElementById('login-submit').addEventListener('click', function () {
    // get userName
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;

    // get userPassword
    const passField = document.getElementById('pass-field');
    const userPass = passField.value;
    //check email and password
    if (userEmail == 'engnr.pranto@gmail.com' && userPass == 'secretsoflife') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid user');
    }
});