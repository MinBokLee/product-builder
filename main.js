// 번호별 가중치 (1~45)
const weights = Array(46).fill(1);

function weightedRandom() {
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;

    for (let i = 1; i <= 45; i++) {
        rand -= weights[i];
        if (rand <= 0) return i;
    }
}

function generateOneGame() {
    const selected = new Set();

    // 메인 번호 6개
    while (selected.size < 6) {
        selected.add(weightedRandom());
    }

    const mainNumbers = Array.from(selected).sort((a, b) => a - b);

    // 보너스 번호 (중복 불가)
    let bonus;
    do {
        bonus = weightedRandom();
    } while (selected.has(bonus));

    return { mainNumbers, bonus };
}

function generateLotto() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const { mainNumbers, bonus } = generateOneGame();

        // 가중치 증가 (메인 + 보너스)
        mainNumbers.forEach(num => weights[num] += 1);
        weights[bonus] += 1;

        const gameDiv = document.createElement("div");
        gameDiv.className = "game";

        const title = document.createElement("div");
        title.className = "game-title";
        title.textContent = `🎯 ${i}게임`;

        gameDiv.appendChild(title);

        mainNumbers.forEach(num => {
            const ball = document.createElement("span");
            ball.className = "ball";
            ball.textContent = num;
            gameDiv.appendChild(ball);
        });

        const bonusBall = document.createElement("span");
        bonusBall.className = "ball bonus";
        bonusBall.textContent = bonus;
        gameDiv.appendChild(bonusBall);

        resultDiv.appendChild(gameDiv);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.textContent = '☀️';
        }
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });
});