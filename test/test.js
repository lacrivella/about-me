import quizScore from '../src/quizScore.js';
const test = QUnit.test;

// FUNCTION 
//function quizScore(schoolAnswer, pnwAnswer, animalAnswer){
//     schoolAnswer = schoolAnswer.toLowerCase();
//     animalAnswer = animalAnswer.toLowerCase();
//     let score = 0

//     if(schoolAnswer === 'glass' || schoolAnswer === 'glass construction') {
//         score += 1;
//     }

//     if(pnwAnswer === '2015'){
//         score += 1;
//     }
    
//     if(animalAnswer === 'raccoon'){
//         score += 1;
//     }

//     return score;
// };

test('all answers are wrong expecting 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const schoolAnswer = 'Painting';
    const pnwAnswer = '2009';
    const animalAnswer = 'Bears';
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);

    //Assert
    assert.equal(score, expected);
});

test('one of the answers is wrong expecting 2', (assert) => {
    const schoolAnswer = 'glass';
    const pnwAnswer = 'pittsburgh';
    const animalAnswer = 'dragon';
    const expected = 2;

    //act
    const score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);

    //assert
    assert.equal(score, expected);
});

test('all answers are in caps expecting 3', (assert) => {
    const schoolAnswer = 'GLASS';
    const pnwAnswer = 'PITTSBURGH';
    const animalAnswer = 'RaCCoon';
    const expected = 3;

    //act
    const score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);

    //assert
    assert.equal(score, expected);
});
