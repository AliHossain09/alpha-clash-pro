// function play(){
//     // console.log('play now');
//     const homeSection = document.getElementById('Home-screen');
// homeSection.classList.add('hidden');

// const playGroundSection = document.getElementById('Play-ground');
// playGroundSection.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }
    // get the expected to press
    const currentAlphabetElement = document.getElementById('Current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);
    // check match or not
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');

        const currentScore = getTexElementValueById('Current-score');
        // console.log(currentScore);
        const updateScored = currentScore + 1;
        setTextElementValueById('Current-score', updateScored);




        // ------------------------------------------
        // // Update Score.....
        // const currentScoreElement = document.getElementById('Current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
        // // increase the score....
        // const newScore = currentScore + 1;
        // // show the update score.....
        // currentScoreElement.innerText = newScore;


        // console.log('You have press currently', expectedAlphabet);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('You missed. You lost a life');

        const currentLife = getTexElementValueById('Current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('Current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }




        // ---------------------------------------
        // get the current number....
    //     const currentLifeElement = document.getElementById('Current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currentLife = parseInt(currentLifeText);
    

    //     // reduce the life count....
    //     const newLife = currentLife - 1;
        
    //     // display the update life count....
    //     currentLifeElement.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress);


function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // set random generate alphabet to the screen
    const currentAlphabetElement = document.getElementById('Current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('Home-screen');
    hideElementById('Final-score');
    showElementById('Play-ground');
    // reset Score and Life
    setTextElementValueById('Current-life', 5);
    continueGame();
}
function gameOver(){
    hideElementById('Play-ground');
    showElementById('Final-score');
    // get the final score
    const lastScore =getTexElementValueById('Current-score');
    // console.log(lastScore);
    setTextElementValueById('Last-score', lastScore);

    const currentAlphabet = getTexElementValueById('Current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}