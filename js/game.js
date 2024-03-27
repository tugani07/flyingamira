let animationId
// The main function that animates the game
function animate(){
    animationId = requestAnimationFrame(animate)
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // move the pipe to the left
    pipes.forEach((pipe, pipeIndex) => {
        pipe.update()

        // Check for collision with pipes
        if (
            bird.x <= pipe.x + pipe.width &&
            bird.x + bird.width >= pipe.x &&
            (bird.y <= pipe.height || bird.y + bird.height >= pipe.height + pipe.gapHeight) 
        ) {
            hitAudio.play()
            gameOver()
        }

        // Check if the pipe has passed the bird
        if (pipe.x + pipe.width < bird.x && !pipe.passed) {
            score += 1
            pipe.passed = true
            scoreAudio.play()
            scoreAudio.currentTime = 0
        }

        // increase the level according to the score
        if(score >= 10 && score < 20){
            pipe.speed = 9
        }
        
        if(score >= 20 && score < 40){
            pipe.speed = 12
            pipe.gapHeight = 150
        }
        
        if(score >= 40){
            pipe.speed = 15
            pipe.gapHeight = 130
        }
        
        // remove the pipe if it is outside the screen(canvas)
        if(pipe.x + pipe.width < 0){
            setTimeout(() => {
                pipes.splice(pipeIndex, 1)
            }, 0)
        }
    })

    // if bird goes below the screen
    if(bird.y > canvas.height){
        gameOverAudio.play()
        gameOver()
    }

    // if bird goes above the screen
    if(bird.y + bird.height < 0){
        hitAudio.play()
        gameOver()
    }

    // show score in the screen
    displayScore(canvas.width / 2 - 15, canvas.height / 2 - 280, score)
    bird.update()
}

let gameState = "initial-game"