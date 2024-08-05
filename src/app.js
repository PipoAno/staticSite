import xss from 'xss';
    // JavaScript code goes here
    // Example: Display a message when the form is submitted
document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var username = xss(document.getElementById('username').value);
        var password = xss(document.getElementById('password').value);
        console.log('Username:', username);
        console.log('Password:', password);
        //Do login

        //Store the JWT token in the local storage
        localStorage.setItem('jwtToken', 'YOUR_JWT_TOKEN_HERE');
        alert('Form submitted!');
});