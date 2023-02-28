'use strict';

const number = document.querySelector('.number')
const guessBtn = document.querySelector('.guess')
const output = document.querySelector('.output')

function guessMyNumber (input) {
    let myNumber = Math.floor((Math.random() * 50) + 1);
    if (input > myNumber) {
        return 'My number is smaller';
    } else if (input < myNumber) {
        return 'My number is bigger';
    } return 'You win. Congratulations!';

};

guessBtn.addEventListener('click', function() {
    let a = number.value.trim(); 
    guessMyNumber(a);
    output.innerText = guessMyNumber(a);


}
);
