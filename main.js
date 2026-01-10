const dinnerMenus = [
    { name: "치킨", name_en: "Chicken", image: "https://img.freepik.com/free-photo/crispy-fried-chicken-wooden-board-close-up_23-2149791404.jpg?w=740&t=st=1704987178~exp=1704987778~hmac=8c4e7f6d9f8d5f7b4e7e7a8e7f8e7a8e7f8e7a8e7f8e7a8e7f8e7a8e7f8e7a8e" },
    { name: "피자", name_en: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "삼겹살", name_en: "Samgyeopsal", image: "https://img.freepik.com/premium-photo/korean-grilled-pork-belly-samygyupsal-and-kimchi-on-cast-iron-plate_21535497.jpg?w=740&t=st=1704987258~exp=1704987858~hmac=e2c7a2b0c5e3f4d5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9" },
    { name: "초밥", name_en: "Sushi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "파스타", name_en: "Pasta", image: "https://img.freepik.com/free-photo/delicious-pasta-plate_1143825.jpg?w=740&t=st=1704987480~exp=1704988080~hmac=e6f8d1c2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "김치찌개", name_en: "Kimchi Stew", image: "https://img.freepik.com/free-photo/kimchi-jjigae-kimchi-stew-korean-food_10795493.jpg?w=740&t=st=1704987621~exp=1704988221~hmac=a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3" },
    { name: "된장찌개", name_en: "Soybean Paste Stew", image: "https://img.freepik.com/free-photo/doenjang-jjigae-korean-food_13778009.jpg?w=740&t=st=1704987810~exp=1704988410~hmac=f0e1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "제육볶음", name_en: "Spicy Pork Stir-fry", image: "https://img.freepik.com/free-photo/delicious-jeyuk-bokkeum-meal_17505677.jpg?w=740&t=st=1704988010~exp=1704988610~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "불고기", name_en: "Bulgogi", image: "https://img.freepik.com/free-photo/korean-beef-bulgogi-bbq_20562473.jpg?w=740&t=st=1704988360~exp=1704988960~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "비빔밥", name_en: "Bibimbap", image: "https://img.freepik.com/free-photo/delicious-bibimbap-bowl_14003360.jpg?w=740&t=st=1704988500~exp=1704989100~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "순두부찌개", name_en: "Soft Tofu Stew", image: "https://img.freepik.com/free-photo/sundubu-jjigae-korean-spicy-soft-tofu-stew_11425121.jpg?w=740&t=st=1704988640~exp=1704989240~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "돈까스", name_en: "Pork Cutlet", image: "https://img.freepik.com/free-photo/top-view-tonkatsu-japanese-cuisine_11679090.jpg?w=740&t=st=1704988850~exp=1704989450~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "햄버거", name_en: "Hamburger", image: "https://img.freepik.com/free-photo/delicious-burger-with-bacon-cheese_11504990.jpg?w=740&t=st=1704989060~exp=1704989660~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "샌드위치", name_en: "Sandwich", image: "https://img.freepik.com/free-photo/fresh-sandwich-with-lettuce-tomato-cheese-ham_12501099.jpg?w=740&t=st=1704989250~exp=1704989850~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "샐러드", name_en: "Salad", image: "https://img.freepik.com/free-photo/healthy-salad-plate_12501101.jpg?w=740&t=st=1704989480~exp=1704990080~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "냉면", name_en: "Cold Noodles", image: "https://img.freepik.com/free-photo/korean-cold-noodles-naengmyeon_11679091.jpg?w=740&t=st=1704989740~exp=1704990340~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "칼국수", name_en: "Noodle Soup", image: "https://img.freepik.com/free-photo/kalguksu-korean-noodle-soup_12675685.jpg?w=740&t=st=1704989800~exp=1704990400~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "떡볶이", name_en: "Tteokbokki", image: "https://img.freepik.com/free-photo/tteokbokki-korean-spicy-rice-cakes_12501098.jpg?w=740&t=st=1704989970~exp=1704990570~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" },
    { name: "라면", name_en: "Ramen", image: "https://img.freepik.com/free-photo/ramen-noodle-soup_12501097.jpg?w=740&t=st=1704990110~exp=1704990710~hmac=e0f1d2c3b4a5f6e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1b2a3f4e5d6c7b8a9f0e1" },
    { name: "김밥", name_en: "Gimbap", image: "https://img.freepik.com/free-photo/gimbap-korean-sushi-rolls_12501096.jpg?w=740&t=st=1704990260~exp=1704990860~hmac=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2" }
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
