function quizScore(schoolAnswer, pnwAnswer, animalAnswer){
    console.log('woo');
    schoolAnswer = schoolAnswer.toLowerCase();
    pnwAnswer = pnwAnswer.toLowerCase();
    animalAnswer = animalAnswer.toLowerCase();

    let score = 0;

    if(schoolAnswer === 'glass' || schoolAnswer === 'glass construction') {
        score += 1;
    }

    if(pnwAnswer === 'pittsburgh' || pnwAnswer === 'pennsylvania' || pnwAnswer === 'pittsburgh, pennsylvania'){
        score += 1;
    }
    
    if(animalAnswer === 'raccoon'){
        score += 1;
    }

    return score;
}

export default quizScore;