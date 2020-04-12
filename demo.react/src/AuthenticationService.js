export const authenticationService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://localhost:8080/login', requestOptions)
        .then(response => {
            console.log(response);
            localStorage.setItem("currentUsername", username);
            localStorage.setItem("authorizationHeader", response.headers.get('authorization'));
            window.location.href='/#/contact'
        });
}

function logout() {
    localStorage.removeItem('authorizationHeader');
    localStorage.removeItem('currentUsername');
}