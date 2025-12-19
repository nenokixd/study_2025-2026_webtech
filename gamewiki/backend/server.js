// gamewiki/backend/server.js
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 5000;

// Разрешаем CORS вручную
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'users.json');

let users = [];

// Загрузка пользователей
if (fs.existsSync(DATA_FILE)) {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  users = JSON.parse(data);
} else {
  fs.writeFileSync(DATA_FILE, '[]');
}

// Сохранение пользователей
function saveUsers() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// Тест
app.get('/', (req, res) => {
  res.json({ message: 'API работает!', users: users.length });
});

// Регистрация
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Пользователь уже существует' });
  }
  
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers();
  
  res.status(201).json({ 
    message: 'Пользователь создан',
    user: { 
      id: newUser.id, 
      username: newUser.username, 
      email: newUser.email 
    }
  });
});

// Логин
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Неверный email или пароль' });
  }
  
  res.json({ 
    message: 'Вход выполнен',
    user: { 
      id: user.id, 
      username: user.username, 
      email: user.email 
    },
    token: 'token-' + user.id
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  console.log(`Пользователей в базе: ${users.length}`);
});