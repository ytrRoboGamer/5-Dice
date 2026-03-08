const diceAmountDisplay = document.querySelector('.diceAmountDisplay');
const diceRow1 = document.querySelector('.diceRow1');
const diceRow2 = document.querySelector('.diceRow2');
const diceRow3 = document.querySelector('.diceRow3');
let diceAmount = 5;
let randomNum = 0;
let dice = 1;

function changeDiceAmount(change) {
  if (change === 'remove') {
    if (diceAmount === 1) {
      diceAmount = 5;
      diceAmountDisplay.innerHTML = '5 Dice';
    } else {
      diceAmount --;
      diceAmountDisplay.innerHTML = `${diceAmount} Dice`;
    }
  } else if (change === 'add') {
    if (diceAmount === 5) {
      diceAmount = 1;
      diceAmountDisplay.innerHTML = '1 Dice';
    } else {
      diceAmount ++;
      diceAmountDisplay.innerHTML = `${diceAmount} Dice`;
    }
  }
}


function rollDice() {
  diceRow1.innerHTML = '';
  diceRow2.innerHTML = '';
  diceRow3.innerHTML = '';
  chooseRandomDie();
  diceRow1.innerHTML += `<img class="diceIMG" src="Dice/die_${dice}.png">`;
  if (diceAmount === 1) {return}

  chooseRandomDie();
  diceRow1.innerHTML += `<img class="diceIMG" src="Dice/die_${dice}.png">`;
  if (diceAmount === 2) {return}

  chooseRandomDie();
  diceRow2.innerHTML += `<img class="diceIMG" src="Dice/die_${dice}.png">`;
  if (diceAmount === 3) {return}

  chooseRandomDie();
  diceRow2.innerHTML += `<img class="diceIMG" src="Dice/die_${dice}.png">`;
  if (diceAmount === 4) {return}

  chooseRandomDie();
  diceRow3.innerHTML += `<img class="diceIMG" src="Dice/die_${dice}.png">`;
}


function chooseRandomDie() {
  randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 0.17) {
    dice = 1;
  } else if (randomNum >= 0.17 && randomNum < 0.34) {
    dice = 2;
  } else if (randomNum >= 0.34 && randomNum < 0.51) {
    dice = 3;
  } else if (randomNum >= 0.51 && randomNum < 0.68) {
    dice = 4;
  } else if (randomNum >= 0.68 && randomNum < 0.85) {
    dice = 5;
  } else if (randomNum >= 0.85 && randomNum <= 1) {
    dice = 6;
  }
}
