import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Регистрация успешна! Перенаправляем на вход...');
        
// Перенаправляем на страницу входа через 2 секунды
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setMessage(data.error || 'Ошибка регистрации');
      }
    } catch (error) {
      setMessage('Ошибка сети');
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="auth-form">
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Имя пользователя:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary">Зарегистрироваться</button>
          </form>
          <div className="form-links">
            <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
          </div>
          {message && (
            <div id="message" style={{
              marginTop: '1rem',
              padding: '10px',
              borderRadius: '5px',
              background: message.includes('Ошибка') ? 'rgba(244, 67, 54, 0.1)' : 'rgba(76, 175, 80, 0.1)',
              border: message.includes('Ошибка') ? '1px solid #f44336' : '1px solid #4CAF50',
              color: message.includes('Ошибка') ? '#f44336' : '#4CAF50'
            }}>
              {message}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Register;