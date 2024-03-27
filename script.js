window.onload = function() {
    // Create audio element
    var audio = document.createElement('audio');
    audio.src = 'background-music.wav'; // Path to your audio file
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5; // Adjust volume as needed (0.0 to 1.0)

    // Append audio to the body
    document.body.appendChild(audio);
};
