'use strict';

const number = document.querySelector('.number')
const guessBtn = document.querySelector('.guess')
const output = document.querySelector('.output')
const total_guesses = document.querySelector('.total_guesses')

function guessMyNumber (input) {
    
    if (input > myNumber) {
        return 'My number is smaller';
    } else if (input < myNumber) {
        return 'My number is bigger';
    } return 'You guessed. Congratulations!';

};

let myNumber = Math.floor((Math.random() * 50) + 1);
let times = 0;

guessBtn.addEventListener('click', function() {
    let a = number.value.trim(); 
    output.innerText = guessMyNumber(a);
    times = times + 1;
    total_guesses.innerText = times;
}

);
