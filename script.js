'use strict';
//we wrote the DOM i seasier and more clean for eyes.
const btns = document.querySelectorAll('.show-modal');
const showOverlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
// because we daplicate the addin part its good to make a function...
const ApplyHiddenAction = () => {
  modal.classList.add('hidden');
  showOverlay.classList.add('hidden');
};
// add eventListener for all buttons
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    showOverlay.classList.remove('hidden');
  });
}
//to close the floating card!!
//notice the calling function without (), beacuse if we add ()it will execute as the page load
document
  .querySelector('.close-modal')
  .addEventListener('click', ApplyHiddenAction);
//removing the card by clicking on the bluring
showOverlay.addEventListener('click', ApplyHiddenAction);


//hide the card and blure using only the Escape Button!!!!!
//the e as an argument in function when we do console log it show us the object that has been pressed contained the ex. key:"Escape"...
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    ApplyHiddenAction();
  }
});
