let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('cat');
    const scoreDisplay = document.getElementById('score');
    const gameArea = document.getElementById('game-area');

    function randomPosition() {
        const x = Math.random() * (gameArea.clientWidth - cat.clientWidth);
        const y = Math.random() * (gameArea.clientHeight - cat.clientHeight);
        cat.style.left = `${x}px`;
        cat.style.top = `${y}px`;
    }

    cat.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        randomPosition();
    });

    setInterval(randomPosition, 1000);
});
