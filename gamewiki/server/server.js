import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Получаем текущую директорию для ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'users.json');

// Загружаем пользователей из файла
let users = [];

function loadUsers() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            const parsed = JSON.parse(data);
            console.log(`✅ Загружено ${parsed.length} пользователей из файла`);
            return Array.isArray(parsed) ? parsed : [];
        } else {
            console.log('📁 Файл users.json не найден, создаем новый');
            fs.writeFileSync(DATA_FILE, '[]');
            return [];
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки пользователей:', error);
        return [];
    }
}

// Сохраняем пользователей в файл
function saveUsers() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
        console.log(`💾 Сохранено ${users.length} пользователей в файл`);
    } catch (error) {
        console.error('❌ Ошибка сохранения пользователей:', error);
    }
}

// Инициализируем при запуске
users = loadUsers();

// Middleware для логирования
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Тестовый маршрут
app.get('/', (req, res) => {
    res.json({ 
        message: 'GameWiki API is working!',
        totalUsers: users.length,
        endpoints: {
            register: 'POST /api/register',
            login: 'POST /api/login',
            users: 'GET /api/users'
        }
    });
});

// Регистрация
app.post('/api/register', (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        console.log(`📝 Регистрация: ${username} (${email})`);
        
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Все поля обязательны' });
        }
        
        // Проверяем, существует ли пользователь
        const existingUser = users.find(u => 
            u.email === email || u.username === username
        );
        
        if (existingUser) {
            console.log(`⚠️ Пользователь уже существует: ${email}`);
            return res.status(400).json({ error: 'Пользователь уже существует' });
        }
        
        // Создаем пользователя
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            username,
            email,
            password: String(password), // Гарантируем, что пароль - строка
            createdAt: new Date().toISOString(),
            lastLogin: null,
            role: 'user'
        };
        
        users.push(newUser);
        saveUsers();
        
        console.log(`✅ Создан пользователь ID: ${newUser.id}, ${username}`);
        console.log(`👥 Всего пользователей: ${users.length}`);
        
        res.status(201).json({ 
            message: 'Пользователь создан',
            user: { 
                id: newUser.id, 
                username: newUser.username, 
                email: newUser.email,
                createdAt: newUser.createdAt
            }
        });
    } catch (error) {
        console.error('❌ Ошибка регистрации:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Логин (ИСПРАВЛЕННАЯ ВЕРСИЯ)
app.post('/api/login', (req, res) => {
    try {
        const { email, password } = req.body;
        
        console.log(`🔑 Попытка входа: ${email}`);
        
        if (!email || !password) {
            return res.status(400).json({ error: 'Email и пароль обязательны' });
        }
        
        // Находим пользователя
        const user = users.find(u => u.email === email);
        
        if (!user) {
            console.log(`❌ Пользователь не найден: ${email}`);
            return res.status(401).json({ error: 'Неверный email или пароль' });
        }
        
        // Сравниваем пароли как строки
        if (String(user.password) !== String(password)) {
            console.log(`❌ Неверный пароль для: ${email}`);
            console.log(`   Ожидалось: "${user.password}"`);
            console.log(`   Получено:  "${password}"`);
            return res.status(401).json({ error: 'Неверный email или пароль' });
        }
        
        // Обновляем время последнего входа
        user.lastLogin = new Date().toISOString();
        saveUsers();
        
        console.log(`✅ Успешный вход: ${user.username} (ID: ${user.id})`);
        
        res.json({ 
            message: 'Вход выполнен',
            user: { 
                id: user.id, 
                username: user.username, 
                email: user.email,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            },
            token: 'fake-jwt-token-' + user.id
        });
    } catch (error) {
        console.error('❌ Ошибка входа:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Получить всех пользователей (без паролей)
app.get('/api/users', (req, res) => {
    try {
        console.log(`📊 Запрос списка пользователей. Всего: ${users.length}`);
        
        const safeUsers = users.map(u => ({
            id: u.id,
            username: u.username,
            email: u.email,
            createdAt: u.createdAt,
            lastLogin: u.lastLogin,
            role: u.role
        }));
        
        res.json({
            total: users.length,
            users: safeUsers
        });
    } catch (error) {
        console.error('❌ Ошибка получения пользователей:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Отладочная информация
app.get('/api/debug', (req, res) => {
    console.log('=== DEBUG INFO ===');
    console.log('Total users:', users.length);
    users.forEach(user => {
        console.log(`- ${user.username} (${user.email}) - ID: ${user.id}`);
        console.log(`  Password in DB: "${user.password}"`);
    });
    console.log('=================');
    
    res.json({ 
        message: 'Информация выведена в консоль сервера',
        userCount: users.length 
    });
});

// Сохраняем при выходе
process.on('SIGINT', () => {
    console.log('🔄 Сохранение данных перед выходом...');
    saveUsers();
    process.exit();
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📁 Данные сохраняются в: ${DATA_FILE}`);
    console.log(`👥 Загружено пользователей: ${users.length}`);
    console.log('\n🔧 Эндпоинты:');
    console.log(`   POST /api/register  - Регистрация`);
    console.log(`   POST /api/login     - Вход`);
    console.log(`   GET  /api/users     - Список пользователей`);
    console.log(`   GET  /api/debug     - Отладочная информация`);
});