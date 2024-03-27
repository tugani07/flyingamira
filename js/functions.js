// Function to generate random number between a range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate the pipes that block the bird
let intervalId
// All the pipes on the screen
let pipes = []
function generatePipes(){
    intervalId = setInterval(() => {
        const pipe = new Pipe(canvas.width, 0, 'seagreen')
        pipes.push(pipe)
    }, 1000)
}

function splitNum(num) {
    return String(num).split("").map(Number);
}

// Function to display the score
function displayScore(x, y, score){
    if(score < 10){
        context.drawImage(numbers[score], x, y)
    }else if(score >= 10 && score < 100){
        const splitNums = splitNum(score)
        context.drawImage(numbers[splitNums[0]], x, y)
        context.drawImage(numbers[splitNums[1]], x+20, y)
    }else{
        const splitNums = splitNum(score)
        context.drawImage(numbers[splitNums[0]], x, y)
        context.drawImage(numbers[splitNums[1]], x+20, y)
        context.drawImage(numbers[splitNums[2]], x+40, y)

        if(score === 999){
            gameOver()
        }
    }
}

// Function to display the gameover screen
function gameOver(){
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)
    if(score > highScore){
        highScore = score
        localStorage.setItem('highScore', highScore)
        highScoreContainer.textContent = `Highscore = ${highScore}`
    }
    context2.drawImage(gameOverImage, canvas2.width / 2 - gameOverImage.width / 2, canvas2.height / 2 - 100, gameOverImage.width, gameOverImage.height);
    gameState = 'gameover'
}

let highScore
// Function to initialize the game or restart the game
function init(){
    cancelAnimationFrame(animationId)
    clearInterval(intervalId)

    if(localStorage.getItem('highScore')){
        highScore = localStorage.getItem('highScore')
    }else{
        localStorage.setItem('highScore', 0)
        highScore = localStorage.getItem('highScore')
    }

    score = 0
    pipes = []
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    context2.clearRect(0, 0, canvas2.width, canvas2.height);

    context.drawImage(
        startImage, 
        canvas.width / 2 - startImage.width / 2, 
        canvas.height / 2 - startImage.height / 2, 
        startImage.width, 
        startImage.height
    )

    bird = new Bird(birdXPos, birdYPos, 'yellow')
}