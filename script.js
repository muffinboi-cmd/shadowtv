/* JS */

const toggleSwitch = document.querySelector('#toggle');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

/* Media queries */

@media screen and (max-width: 768px) {
    h1 {
        font-size: 24px;
    }

    .slider {
        width: 40px;
        height: 20px;
    }

    .slider:before {
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 18px;
    }
}

@media screen and (max-width: 480px) {
    h1 {
        font-size: 20px;
    }

    .facts {
        margin-top: 30px;
    }

    h2 {
        font-size: 22px;
    }

    p {
        font-size: 16px;
    }
}