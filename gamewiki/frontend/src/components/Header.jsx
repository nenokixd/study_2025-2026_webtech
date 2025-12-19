import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles-new.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверяем авторизацию при загрузке
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Ошибка парсинга user:', error);
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
    <header className="gw-header">
      <div className="gw-header-top">
        <div className="container">
          <div className="gw-logo">
            <h1><i className="fas fa-book-open"></i> SoapWiki</h1>
            <span className="gw-tagline">Гайды</span>
          </div>
          
          <div className="gw-search">
            <form className="search-form">
              <input type="text" placeholder="Поиск игр, гайдов, персонажей..." />
              <button type="submit"><i className="fas fa-search"></i></button>
            </form>
          </div>
          
          <div className="gw-user-auth">
            {user ? (
              <>
                <span style={{ 
                  color: '#fff', 
                  marginRight: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <i className="fas fa-user"></i> {user.username}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn-login"
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #666', 
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    color: '#e8e8e8',
                    fontFamily: 'inherit',
                    fontSize: 'inherit'
                  }}
                >
                  <i className="fas fa-sign-out-alt"></i> Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-login">
                  <i className="fas fa-sign-in-alt"></i> Войти
                </Link>
                <Link to="/register" className="btn-register">
                  <i className="fas fa-user-plus"></i> Регистрация
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      <nav className="gw-navbar">
        <div className="container">
          <ul className="gw-nav-menu">
            <li>
              <Link 
                to="/" 
                className={window.location.pathname === '/' ? 'active' : ''}
              >
                <i className="fas fa-home"></i> Главная
              </Link>
            </li>
            <li>
              <a href="#games">
                <i className="fas fa-gamepad"></i> Игры
              </a>
            </li>
            <li>
              <a href="#news">
                <i className="fas fa-newspaper"></i> Новости
              </a>
            </li>
            <li>
              <a href="#guides">
                <i className="fas fa-book"></i> Гайды
              </a>
            </li>
            <li>
              <a href="#database">
                <i className="fas fa-database"></i> Базы данных
              </a>
            </li>
            <li>
              <a href="#videos">
                <i className="fas fa-video"></i> Видео
              </a>
            </li>
            <li>
              <a href="#forum">
                <i className="fas fa-comments"></i> Форум
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;