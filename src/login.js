import xss from 'xss';
import { login } from './api';

console.log('Initializing');
document.getElementById('loginForm').addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    console.log('Handling submit');
    event.preventDefault(); // Prevent form submission
    let username = xss(document.getElementById('username').value);
    let password = xss(document.getElementById('password').value);
    console.log(username);
    console.log(password);
    console.log(document.referrer);
    let loginRet = await login(username, password); // Use await to wait for the login function to complete
    console.log(loginRet);
    // Get the referrer URL
    // document.location.href = "/index.html";
}

