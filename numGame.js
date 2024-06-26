let button = document.querySelector("button");
let input = document.querySelector("input");
let numOfChances = document.querySelector(".numofchance");
let Chances = 10;
let highOrLow = document.querySelector(".highorlow");
let guessNum = document.querySelector(".guessnum")

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

input.focus();

button.onclick = function() {

    if (button.textContent === "replay") {
        window.location.reload();
    }

    Chances--;
    if (input.value == randomNum) {
        
        guessNum.textContent = "Congrats 🎉";
        guessNum.style.fontSize = "40px";
        input.disabled = true;
        button.textContent = "replay";
        highOrLow.textContent = "";
        numOfChances.textContent = "You won !!";
        numOfChances.style.fontSize = "20px";

    } else if (input.value < randomNum && input.value > 0) {

        highOrLow.textContent = "Your guess is low";
        numOfChances.textContent = 'You have ' + Chances + ' chances left';

    } else if (input.value > randomNum && input.value < 100) {

        highOrLow.textContent = "Your guess is high";
        numOfChances.textContent = 'You have ' + Chances + ' chances left';

    } else {

        highOrLow.textContent = "Your number is Invalid";
        highOrLow.style.color = "red";
        numOfChances.textContent = 'You have ' + Chances + ' chances left';

    }

    if (Chances == 0) {

        guessNum.textContent = "You Lost !!";
        guessNum.style.color = "red";
        input.disabled = true;
        input.value = "";
        button.textContent = "replay";

    }
}