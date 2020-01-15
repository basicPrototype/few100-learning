
import './styles.css';
import { add } from './math';
console.log('Ready to Get Down With Some TypeScript!');

console.log(add(3, 3));

// step 1: find the important things you need on the page
const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLButtonElement;
const answer = document.getElementById('answer') as HTMLSpanElement;

// hover over each in the console log and it'll highlight each
console.log(num1, num2, addButton, answer);

console.log(num1.valueAsNumber);

// step 2: look up the events
addButton.addEventListener('click', handleAddClick);

function handleAddClick() {
    // console.log('button clicked');
    const a = num1.valueAsNumber;
    const b = num2.valueAsNumber;
    const sum = add(a, b);
    answer.innerText = sum.toString();

    num1.focus();
}

// step 3: make it prettier
