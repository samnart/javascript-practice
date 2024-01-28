import './styles.css';

const app = document.getElementById('app');
const clickMeButton = document.getElementById('clickMe');
const outputParagraph = document.getElementById('output');

clickMeButton.addEventListener('click', () => {
    outputParagraph.textContent = 'Button clicked!';
});