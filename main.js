const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "초밥",
    "파스타",
    "김치찌개",
    "된장찌개",
    "족발",
    "보쌈",
    "떡볶이",
    "라멘",
    "햄버거",
    "부대찌개",
    "곱창",
    "닭갈비",
    "짜장면",
    "짬뽕",
    "마라탕",
    "쌀국수",
    "돈까스"
];

function recommendDinner() {
    const resultDiv = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    resultDiv.innerHTML = `<p class="menu-item">${recommendedMenu}</p>`;
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
