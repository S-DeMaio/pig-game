'use strict';
// setting up element selectors
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //works the same as queryselector, but preforms faster when dealing with thousands of elements.
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Dice functionality
const rollDice = function () {
  // generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
};

btnRoll.addEventListener('click', rollDice);