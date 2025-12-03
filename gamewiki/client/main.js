// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обновление навигации в зависимости от авторизации
    updateNavigation();
    
    // Инициализация поиска
    initSearch();
    
    // Инициализация анимаций
    initAnimations();
});

// client/main.js
const PATHS = {
    home: 'index.html',
    login: 'login.html',
    register: 'register.html',
    profile: 'profile.html'
};
// Обновление навигации
function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    
    if (user && loginBtn && registerBtn) {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${user.username}`;
        loginBtn.href = PATHS.profile;
        
        registerBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти';
        registerBtn.href = "#";
        registerBtn.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.location.href = PATHS.home;
        };
    } else if (loginBtn && registerBtn) {
        // Если пользователь не авторизован
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти';
        loginBtn.href = PATHS.login;
        
        registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Регистрация';
        registerBtn.href = PATHS.register;
        registerBtn.onclick = null;
    }
}
// Инициализация поиска
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                alert(`Поиск: ${searchTerm} (функция в разработке)`);
                searchInput.value = '';
            }
        });
    }
}

// Инициализация анимаций
function initAnimations() {
    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за карточками игр
    const gameCards = document.querySelectorAll('.gw-game-card');
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => observer.observe(card), index * 100);
    });
}

// Утилиты
function showNotification(message, type = 'info') {
    // В будущем можно реализовать красивые уведомления
    console.log(`[${type.toUpperCase()}] ${message}`);
}