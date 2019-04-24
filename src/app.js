import quizScore from './quizScore.js';

const submitButton = document.getElementById('submit-button');

const schoolInput = document.getElementById('school-answer');
const pnwInput = document.getElementById('pnw-answer');
const animalInput = document.getElementById('animal-answer');

submitButton.addEventListener('click', () => {
   const schoolAnswer= schoolInput.value;
   const pnwAnswer = pnwInput.value;
   const animalAnswer = animalInput.value;

   let score = 0;

   let scoreEl = document.getElementById('score');

   if(schoolAnswer.trim () === '' || pnwAnswer.trim () === '' || animalAnswer.trim () === '') {
        scoreEl.textContent = 'Please fill out all options.'; }
        else {
            score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);
            if(score <= 2){
                scoreEl.classList.add('bad');
                scoreEl.classList.remove('good');
            } else {
                scoreEl.classList.remove('bad');
                scoreEl.classList.add('add');
            }

            scoreEl.textContent = 'Your got ' + score + 'correct! That is ' + (score / 3) * 100 + '%';
        }
   });