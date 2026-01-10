const dinnerMenus = [
    { name: "치킨", name_en: "Chicken", image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "피자", name_en: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "삼겹살", name_en: "Samgyeopsal", image: "https://images.unsplash.com/photo-1627993072236-4d57a9b0c511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "초밥", name_en: "Sushi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "파스타", name_en: "Pasta", image: "https://images.unsplash.com/photo-1620800078817-48f8a61c3905?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "김치찌개", name_en: "Kimchi Stew", image: "https://images.unsplash.com/photo-1596700080836-e8810232230a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "된장찌개", name_en: "Soybean Paste Stew", image: "https://images.unsplash.com/photo-1678120015509-5c0a3e8e2d4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "제육볶음", name_en: "Spicy Pork Stir-fry", image: "https://images.unsplash.com/photo-1630138676348-18e0d49b2f63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "불고기", name_en: "Bulgogi", image: "https://images.unsplash.com/photo-1548039777-67aa322ffb76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "비빔밥", name_en: "Bibimbap", image: "https://images.unsplash.com/photo-1574510523032-9c98b6d3b4b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "순두부찌개", name_en: "Soft Tofu Stew", image: "https://images.unsplash.com/photo-1627993072236-4d57a9b0c511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "돈까스", name_en: "Pork Cutlet", image: "https://images.unsplash.com/photo-1603525545464-9b8e1f5c6e82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "햄버거", name_en: "Hamburger", image: "https://images.unsplash.com/photo-1571091720565-d6d7ee809117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "샌드위치", name_en: "Sandwich", image: "https://images.unsplash.com/photo-1594332986427-046e7f8e7b1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "샐러드", name_en: "Salad", image: "https://images.unsplash.com/photo-1512621776951-a5739e29a8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "냉면", name_en: "Cold Noodles", image: "https://images.unsplash.com/photo-1626888469882-9658e3923a1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "칼국수", name_en: "Noodle Soup", image: "https://images.unsplash.com/photo-1627993072236-4d57a9b0c511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "떡볶이", name_en: "Tteokbokki", image: "https://images.unsplash.com/photo-1582294103135-e6f4a3c26b8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "라면", name_en: "Ramen", image: "https://images.unsplash.com/photo-1588166524941-860472439564?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "김밥", name_en: "Gimbap", image: "https://images.unsplash.com/photo-1626082928641-6e8281f6d3f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const translations = {
    ko: {
        title: "🍴 오늘 점심 메뉴 추천 🍴",
        button: "점심 메뉴 추천 받기",
        placeholder: "여기에 추천 메뉴가 표시됩니다.",
        hint: "※ 버튼을 누르면 랜덤으로 메뉴가 추천됩니다.",
        contact_title: "제휴문의",
        name_label: "이름:",
        email_label: "이메일:",
        message_label: "메시지:",
        submit_button: "문의하기"
    },
    en: {
        title: "🍴 Today's Lunch Menu Recommendation 🍴",
        button: "Get Lunch Recommendation",
        placeholder: "Recommended menu will be displayed here.",
        hint: "※ Press the button to get a random menu recommendation.",
        contact_title: "Partnership Inquiry",
        name_label: "Name:",
        email_label: "Email:",
        message_label: "Message:",
        submit_button: "Submit Inquiry"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.title = lang === 'ko' ? "오늘 점심 뭐 먹지?" : "What's for Lunch?";
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('button[onclick="recommendDinner()"]').textContent = translations[lang].button;
    document.querySelector('.menu-placeholder').textContent = translations[lang].placeholder;
    document.querySelector('.hint').textContent = translations[lang].hint;
    document.getElementById('lang-toggle').textContent = lang === 'ko' ? 'EN' : 'KO';

    // Update contact form elements
    document.querySelector('#contact-form h2').textContent = translations[lang].contact_title;
    document.querySelector('label[for="name"]').textContent = translations[lang].name_label;
    document.querySelector('label[for="email"]').textContent = translations[lang].email_label;
    document.querySelector('label[for="message"]').textContent = translations[lang].message_label;
    document.querySelector('#contact-form button[type="submit"]').textContent = translations[lang].submit_button;

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