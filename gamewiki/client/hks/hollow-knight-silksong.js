// Функции для управления выпадающими меню
function showSubmenu(menuType) {
    const submenu = document.getElementById(`${menuType}-submenu`);
    if (submenu) {
        submenu.style.opacity = '1';
        submenu.style.visibility = 'visible';
        submenu.style.transform = 'translateY(0)';
    }
}

function hideSubmenu(menuType) {
    const submenu = document.getElementById(`${menuType}-submenu`);
    if (submenu) {
        submenu.style.opacity = '0';
        submenu.style.visibility = 'hidden';
        submenu.style.transform = 'translateY(-10px)';
    }
}

// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления карточек при скролле
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

// Применяем анимацию к карточкам
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.hk-equipment-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
// Функции для управления выпадающими меню
function showSubmenu(menuType) {
    const submenu = document.getElementById(`${menuType}-submenu`);
    if (submenu) {
        submenu.style.opacity = '1';
        submenu.style.visibility = 'visible';
        submenu.style.transform = 'translateY(0)';
    }
}

function hideSubmenu(menuType) {
    const submenu = document.getElementById(`${menuType}-submenu`);
    if (submenu) {
        submenu.style.opacity = '0';
        submenu.style.visibility = 'hidden';
        submenu.style.transform = 'translateY(-10px)';
    }
}

// Закрытие меню при клике вне его
document.addEventListener('click', function(event) {
    const submenus = document.querySelectorAll('.hk-submenu');
    const navItems = document.querySelectorAll('.hk-nav-item');
    const mainLinks = document.querySelectorAll('.nav-main-link');
    
    let isClickInside = false;
    
    navItems.forEach(item => {
        if (item.contains(event.target)) {
            isClickInside = true;
        }
    });
    
    // Проверяем, не кликнули ли на саму главную ссылку
    mainLinks.forEach(link => {
        if (link.contains(event.target)) {
            setTimeout(() => {
                submenus.forEach(submenu => {
                    submenu.style.opacity = '0';
                    submenu.style.visibility = 'hidden';
                    submenu.style.transform = 'translateY(-10px)';
                });
            }, 100);
            return;
        }
    });
    
    if (!isClickInside) {
        submenus.forEach(submenu => {
            submenu.style.opacity = '0';
            submenu.style.visibility = 'hidden';
            submenu.style.transform = 'translateY(-10px)';
        });
    }
});
// Анимация появления разделов на странице мира
function initWorldSections() {
    const sections = document.querySelectorAll('.hk-world-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Плавная прокрутка к якорям на странице мира
function initWorldAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Подсветка активного раздела
                document.querySelectorAll('.hk-world-section').forEach(section => {
                    section.classList.remove('active');
                });
                target.classList.add('active');
            }
        });
    });
}

// Инициализация при загрузке страницы мира
if (window.location.pathname.includes('hks-world.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        initWorldSections();
        initWorldAnchors();
    });
}
// Функция для определения правильного пути к navigation.html
function getNavigationPath() {
    const currentPath = window.location.pathname;
    
    // Если мы в корневой папке hks/
    if (currentPath.includes('/hks/') && !currentPath.includes('/equipment/') && 
        !currentPath.includes('/general/') && !currentPath.includes('/world/')) {
        return 'navigation.html';
    }
    
    // Если мы в подпапках (equipment/, general/, world/)
    return '../navigation.html';
}

// Универсальная функция для загрузки навигации
function loadNavigation() {
    const navContainer = document.getElementById('hk-navigation-container');
    if (!navContainer) return;
    
    const navPath = getNavigationPath();
    
    fetch(navPath)
        .then(response => response.text())
        .then(data => {
            navContainer.innerHTML = data;
            if (typeof initNavigation === 'function') {
                initNavigation();
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
}

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем навигацию если есть контейнер
    if (document.getElementById('hk-navigation-container')) {
        loadNavigation();
    }
    
    // Обновление навигации авторизации
    updateAuthNavigation();
    
    // Инициализация навигации если она уже есть на странице
    if (document.querySelector('.hk-section-nav')) {
        initNavigation();
    }
});
// Универсальная функция для инициализации навигации
function initNavigation() {
    // Функции для выпадающих меню
    function showSubmenu(menuType) {
        const submenu = document.getElementById(`${menuType}-submenu`);
        if (submenu) {
            submenu.style.opacity = '1';
            submenu.style.visibility = 'visible';
            submenu.style.transform = 'translateY(0)';
        }
    }

    function hideSubmenu(menuType) {
        const submenu = document.getElementById(`${menuType}-submenu`);
        if (submenu) {
            submenu.style.opacity = '0';
            submenu.style.visibility = 'hidden';
            submenu.style.transform = 'translateY(-10px)';
        }
    }

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const submenus = document.querySelectorAll('.hk-submenu');
        const navItems = document.querySelectorAll('.hk-nav-item');
        
        let isClickInside = false;
        
        navItems.forEach(item => {
            if (item.contains(event.target)) {
                isClickInside = true;
            }
        });
        
        if (!isClickInside) {
            submenus.forEach(submenu => {
                submenu.style.opacity = '0';
                submenu.style.visibility = 'hidden';
                submenu.style.transform = 'translateY(-10px)';
            });
        }
    });

    // Подсветка активной страницы
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-main-link, .hk-nav-item > span');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && currentPage.includes(linkHref.replace('.html', ''))) {
            link.parentElement.classList.add('active');
        }
    });
}

// Обновление навигации авторизации для страниц HKS
function updateAuthNavigation() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginLinks = document.querySelectorAll('#login-link');
    const profileLinks = document.querySelectorAll('#profile-link');
    
    if (user) {
        loginLinks.forEach(link => {
            if (link) {
                link.style.display = 'none';
            }
        });
        
        profileLinks.forEach(link => {
            if (link) {
                link.style.display = 'inline-block';
                link.innerHTML = `<i class="fas fa-user"></i> ${user.username}`;
                link.href = '../profile.html'; // ← ИЗ hks/ в client/
            }
        });
    }
}

// Автоматическая инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация навигации HKS
    if (document.querySelector('.hk-section-nav') || document.getElementById('hk-navigation-container')) {
        if (typeof initNavigation === 'function') {
            initNavigation();
        }
    }
    
    // Обновление навигации авторизации
    updateAuthNavigation();
});