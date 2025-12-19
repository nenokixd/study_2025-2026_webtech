import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
// Сохранение данных пользователя
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        
        setMessage('Вход выполнен! Перенаправляем...');
        setTimeout(() => navigate('/'), 1000);
      } else {
        setMessage(data.error || 'Ошибка входа');
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
          <h2>Вход в аккаунт</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn-primary">Войти</button>
          </form>
          <div className="form-links">
            <p>Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
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

export default Login;