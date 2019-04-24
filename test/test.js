const test = QUnit.test;

function quizScore(schoolAnswer, pnwAnswer, animalAnswer){
    let score = 0

    if(schoolAnswer === 'glass') {
        score += 1;
    }

    if(pnwAnswer === '2015'){
        score += 1;
    }
    
    if(animalAnswer === 'raccoon'){
        score += 1;
    }

    return score;
};

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
    const pnwAnswer = '2015';
    const animalAnswer = 'dragon';
    const expected = 2;

    //act
    const score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);

    //assert
    assert.equal(score, expected);
});

test('all answers are in caps expecting 0', (assert) => {
    const schoolAnswer = 'Glass';
    const pnwAnswer = 'Twenty Fifteen';
    const animalAnswer = 'Raccoon'
    const expected = 0

    //act
    const score = quizScore(schoolAnswer, pnwAnswer, animalAnswer);

    //assert
    assert.equal(score, expected);
});
