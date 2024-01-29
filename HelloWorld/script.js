// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hello = document.getElementById('hello');

    let messageDisplayed = false;

    // Define the welcome function
    window.welcome = () => {
        if(!messageDisplayed) {
            const hehe = document.createElement('h1');
        hehe.classList.add('hehe');
        hehe.textContent = 'Hello, world!';

        hello.appendChild(hehe);

        messageDisplayed = true;
        }
    };
});
