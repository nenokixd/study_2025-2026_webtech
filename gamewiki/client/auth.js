const API_URL = 'http://localhost:5000/api';

// Конфигурация путей (ОТНОСИТЕЛЬНО КОРНЯ client/)
const PATHS = {
    home: 'index.html',           // Главная страница
    login: 'login.html',          // Страница входа
    register: 'register.html',    // Страница регистрации
    profile: 'profile.html'       // Страница профиля
};

// Функция для показа сообщений
function showMessage(elementId, message, isError = false) {
    const messageEl = document.getElementById(elementId);
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.style.color = isError ? '#f44336' : '#4CAF50';
        messageEl.style.padding = '10px';
        messageEl.style.margin = '10px 0';
        messageEl.style.borderRadius = '5px';
        messageEl.style.background = isError ? 'rgba(244, 67, 54, 0.1)' : 'rgba(76, 175, 80, 0.1)';
        messageEl.style.border = isError ? '1px solid #f44336' : '1px solid #4CAF50';
    }
}

// Регистрация
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('message', 'Регистрация успешна! Перенаправляем на вход...', false);
                
                // Перенаправляем на страницу входа через 2 секунды
                setTimeout(() => {
                    window.location.href = PATHS.login;
                }, 2000);
            } else {
                showMessage('message', data.error, true);
            }
        } catch (error) {
            showMessage('message', 'Ошибка сети', true);
        }
    });
}

// Логин (ИСПРАВЛЕННЫЙ)
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('message', 'Вход выполнен! Перенаправляем на главную...', false);
                
                // Сохраняем данные пользователя
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);
                
                // Перенаправляем на ГЛАВНУЮ СТРАНИЦУ через 1 секунду
                setTimeout(() => {
                    window.location.href = PATHS.home; // "index.html"
                }, 1000);
            } else {
                showMessage('message', data.error, true);
            }
        } catch (error) {
            showMessage('message', 'Ошибка сети', true);
        }
    });
}

// Проверка авторизации и обновление навигации
function updateNavigation() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    // 1. Для старой версии главной (hks страницы)
    const loginLink = document.getElementById('login-link');
    const profileLink = document.getElementById('profile-link');
    const logoutLink = document.getElementById('logout-link');
    
    // 2. Для новой версии главной
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');

    if (user) {
        // Обновляем навигацию на главной странице (старая версия - hks страницы)
        if (loginLink) {
            loginLink.style.display = 'none';
        }
        if (profileLink) {
            profileLink.style.display = 'block';
            profileLink.textContent = user.username;
            profileLink.href = PATHS.profile; // "profile.html"
        }
        if (logoutLink) {
            logoutLink.style.display = 'block';
            logoutLink.href = '#';
            logoutLink.onclick = function(e) {
                e.preventDefault();
                logout();
            };
        }
        
        // Обновляем навигацию на главной странице (новая версия)
        if (loginBtn && registerBtn) {
            loginBtn.innerHTML = `<i class="fas fa-user"></i> ${user.username}`;
            loginBtn.href = PATHS.profile; // "profile.html"
            
            registerBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Выйти';
            registerBtn.href = "#";
            registerBtn.onclick = function(e) {
                e.preventDefault();
                logout();
                return false;
            };
        }
    } else {
        // Если пользователь не авторизован
        
        // Старая версия
        if (loginLink) loginLink.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'none';
        
        // Новая версия
        if (loginBtn && registerBtn) {
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Войти';
            loginBtn.href = PATHS.login; // "login.html"
            
            registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Регистрация';
            registerBtn.href = PATHS.register; // "register.html"
            registerBtn.onclick = null;
        }
    }
}

// Выход из системы
function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = PATHS.home; // "index.html"
}

// Обработчики выхода
if (document.getElementById('logoutButton')) {
    document.getElementById('logoutButton').addEventListener('click', logout);
}

if (document.getElementById('logout-btn')) {
    document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
}

// Загрузка данных профиля
if (document.getElementById('userInfo')) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
        document.getElementById('email').textContent = user.email;
        document.getElementById('userId').textContent = user.id;
    } else {
        window.location.href = PATHS.login; // "login.html"
    }
}

// Обновляем навигацию при загрузке страницы
document.addEventListener('DOMContentLoaded', updateNavigation);