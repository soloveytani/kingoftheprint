const USER_AUTH_DATA = [
    {
        login: 'user1',
        password: 'user1123'
    },
    {
        login: 'user2',
        password: 'user2123'
    },
    {
        login: 'user3',
        password: 'user3123'
    },
];

let authData = {
    login: '',
    password: ''
};

function setLogin () {
    let login = document.getElementById('loginInput');
    authData.login = login.value;
};

function setPassword () {
    let password = document.getElementById('passwordInput');
    authData.password = password.value;
};

function authorization () {
    let loginValidation = false, passwordValidation = false;
    USER_AUTH_DATA.forEach(function (item) { 
        if (item.login === authData.login ) {
            loginValidation = true;
            if (item.password === authData.password) passwordValidation = true;
        }
    });
    let login = document.getElementById('loginInput');
    let password = document.getElementById('passwordInput');
    if (!loginValidation) login.classList.add('typ-invalid-input'); else login.classList.remove("typ-invalid-input");
    if (!passwordValidation) password.classList.add('typ-invalid-input'); else password.classList.remove("typ-invalid-input");
    if (loginValidation && passwordValidation) {
        window.localStorage.setItem('login', authData.login);
        window.localStorage.setItem('password', authData.password);
        window.open('./index.html', '_self');
    }
};