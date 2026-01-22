import { checkTokenViaApi } from "./api";

export async function checkToken() {
    console.log('Checking token');
    let local;
    if (local = localStorage.getItem('jwtToken')) {
        let isValid = await checkTokenViaApi(local);
        console.log(isValid);
        if (!isValid) {
            console.log('Token invalid');
            localStorage.removeItem('jwtToken');
            window.location.href = '/login.html';
        } else {
            const element = document.querySelector('[data-message]');
            if (element) {
                element.textContent = 'Found the token';
            }
        }
    } else {
        console.log('No Token');
        // window.location.href = '/login.html';
    }
}