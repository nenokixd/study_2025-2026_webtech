import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/hks-styles.css';

const HksHeader = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверяем авторизацию при загрузке
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <header className="hk-header">
      <nav className="hk-navbar">
        <div className="hk-nav-brand">
          <h1><Link to="/" style={{ color: '#c83c3c', textDecoration: 'none' }}>SoapWiki</Link></h1>
          <span className="game-title">
            / <Link to="/hks" style={{ color: '#d86a6a', textDecoration: 'none' }}>Hollow Knight: Silksong</Link>
          </span>
        </div>
        
        <div className="hk-nav-links">
          <Link to="/" style={{ color: '#e8e8e8', textDecoration: 'none', marginLeft: '1.5rem' }}>
            <i className="fas fa-home"></i> На главную SoapWiki
          </Link>
          
          {user ? (
            <>
              <span style={{ 
                color: '#fff', 
                marginLeft: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <i className="fas fa-user"></i> {user.username}
              </span>
              <button 
                onClick={handleLogout}
                style={{ 
                  background: 'transparent', 
                  border: '1px solid #666', 
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  color: '#e8e8e8',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  marginLeft: '1.5rem'
                }}
              >
                <i className="fas fa-sign-out-alt"></i> Выйти
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ 
                color: '#e8e8e8', 
                textDecoration: 'none', 
                marginLeft: '1.5rem',
                padding: '8px 16px',
                border: '1px solid #666',
                borderRadius: '5px'
              }}>
                <i className="fas fa-sign-in-alt"></i> Войти
              </Link>
              <Link to="/register" style={{ 
                background: '#c83c3c', 
                color: 'white', 
                textDecoration: 'none', 
                marginLeft: '1.5rem',
                padding: '8px 16px',
                borderRadius: '5px',
                border: '1px solid #c83c3c'
              }}>
                <i className="fas fa-user-plus"></i> Регистрация
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HksHeader;