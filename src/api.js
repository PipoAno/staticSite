// const axios = require('axios');

export function checkTokenViaApi(token) {
    return fetch('http://localhost:5000/checkauth', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed');
            }
        })
        .then(data => {
            console.log(data);
            return true;
        })
        .catch(error => {
            console.error(error);
            return false;
        });
}

export function login(username, password) {
    console.log("login");
    return fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed');
            }
        })
        .then(data => {
            console.log(data);
            localStorage.setItem('jwtToken', data.token);
            document.location.href = "/index.html";
        })
        .catch(error => {
            console.error(error);
            document.location.href = "/login.html";
            // return error;
        });
}
