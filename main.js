const dinnerMenus = [
    { name: "치킨", name_en: "Chicken", image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "피자", name_en: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "삼겹살", name_en: "Samgyeopsal", image: "https://images.unsplash.com/photo-1627993072236-4d57a9b0c511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "초밥", name_en: "Sushi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "파스타", name_en: "Pasta", image: "https://images.unsplash.com/photo-1620800078817-48f8a61c3905?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const translations = {
    ko: {
        title: "🍴 오늘 저녁 메뉴 추천 🍴",
        button: "저녁 메뉴 추천 받기",
        placeholder: "여기에 추천 메뉴가 표시됩니다.",
        hint: "※ 버튼을 누르면 랜덤으로 메뉴가 추천됩니다."
    },
    en: {
        title: "🍴 Dinner Menu Recommendation 🍴",
        button: "Get Dinner Recommendation",
        placeholder: "Recommended menu will be displayed here.",
        hint: "※ Press the button to get a random menu recommendation."
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.title = lang === 'ko' ? "오늘 저녁 뭐 먹지?" : "What's for Dinner?";
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('button[onclick="recommendDinner()"]').textContent = translations[lang].button;
    document.querySelector('.menu-placeholder').textContent = translations[lang].placeholder;
    document.querySelector('.hint').textContent = translations[lang].hint;
    document.getElementById('lang-toggle').textContent = lang === 'ko' ? 'EN' : 'KO';

    // Update recommended menu if already displayed
    const resultDiv = document.getElementById("result");
    if (!resultDiv.querySelector('.menu-placeholder')) {
        const currentMenuName = resultDiv.querySelector('.menu-item').dataset.koreanName;
        const menu = dinnerMenus.find(m => m.name === currentMenuName);
        if (menu) {
            resultDiv.querySelector('.menu-item').textContent = lang === 'ko' ? menu.name : menu.name_en;
        }
    }
}

function recommendDinner() {
    const resultDiv = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];

    resultDiv.innerHTML = `
        <img src="${recommendedMenu.image}" alt="${recommendedMenu.name}" class="menu-image">
        <p class="menu-item" data-korean-name="${recommendedMenu.name}">${currentLang === 'ko' ? recommendedMenu.name : recommendedMenu.name_en}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
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

    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });

    setLanguage(currentLang); // Apply initial language
});
