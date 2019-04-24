const school = document.getElementById('school-answer');
const pnw = document.getElementById('pnw-answer');
const animal = document.getElementById('animal-answer');

const button = document.getElementById('submit-button');
const resultParagraph = document.getElementById('result-paragraph');

console.log(button);
button.addEventListener('click', (event) => {
   event.preventDefault();

   const schoolValue = school.value;
   const pnwValue = pnw.value;
   const animalValue = animal.value;

   console.log(schoolValue, 'school-answer');
   
   // is not showing up in console log. don't know issue. had several eyes look at it and still a wtf
    
});