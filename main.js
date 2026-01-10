const dinnerMenus = [
    { name: "치킨", name_en: "Chicken" },
    { name: "피자", name_en: "Pizza" },
    { name: "삼겹살", name_en: "Samgyeopsal" },
    { name: "초밥", name_en: "Sushi" },
    { name: "파스타", name_en: "Pasta" }
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

async function recommendDinner() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p class="menu-placeholder">${currentLang === 'ko' ? '메뉴를 추천 중입니다...' : 'Recommending menu...'}</p>`;

    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];
    const menuName = currentLang === 'ko' ? recommendedMenu.name : recommendedMenu.name_en;

    let imageUrl = '';
    try {
        const searchQuery = `${menuName} food image`;
        const searchResults = await google_web_search({ query: searchQuery });
        
        // Attempt to extract an image URL from the search results
        const imageUrlMatch = searchResults.output.match(/(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))/i);
        if (imageUrlMatch && imageUrlMatch[0]) {
            imageUrl = imageUrlMatch[0];
        }
    } catch (error) {
        console.error("Error searching for image:", error);
    }

    resultDiv.innerHTML = `
        ${imageUrl ? `<img src="${imageUrl}" alt="${menuName}" class="menu-image">` : ''}
        <p class="menu-item" data-korean-name="${recommendedMenu.name}">${menuName}</p>
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