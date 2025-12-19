import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksMap = () => {
  return (
    <>
      <HksHeader />
      
      <main className="hk-container" style={{ maxWidth: '100%', padding: '0' }}>
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Интерактивная карта Фарлума</h1>
            <p className="silver-text">Исследуйте все локации, секреты и маршруты Hollow Knight: Silksong</p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section" style={{ margin: '20px', borderRadius: '0' }}>
          <div className="hk-section-header">
            <h2><i className="fas fa-map"></i> Интерактивная карта от MapGenie</h2>
            <p>Используйте карту для навигации по королевству Фарлум</p>
          </div>

          <div style={{ 
            border: '2px solid #c83c3c', 
            borderRadius: '10px', 
            overflow: 'hidden',
            margin: '20px 0',
            boxShadow: '0 0 20px rgba(200, 60, 60, 0.3)'
          }}>
            <iframe 
              src="https://mapgenie.io/hollow-knight-silksong/maps/pharloom?embed=light" 
              height="700"
              style={{ 
                width: '100%', 
                border: 'none',
                display: 'block'
              }}
              title="Интерактивная карта Hollow Knight: Silksong"
              allowFullScreen
            />
          </div>

          <div className="hk-info-grid" style={{ marginTop: '30px' }}>
            <div className="hk-info-card">
              <h3><i className="fas fa-search"></i> Поиск локаций</h3>
              <p>Используйте поиск в верхней части карты для быстрого перехода к нужной области</p>
            </div>
            
            <div className="hk-info-card">
              <h3><i className="fas fa-layer-group"></i> Слои карты</h3>
              <p>Включайте/выключайте разные типы меток: сундуки, NPC, боссы, способности</p>
            </div>
            
            <div className="hk-info-card">
              <h3><i className="fas fa-expand"></i> Полноэкранный режим</h3>
              <p>Нажмите на иконку полноэкранного режима для лучшего обзора</p>
            </div>
            
            <div className="hk-info-card">
              <h3><i className="fas fa-download"></i> Сохранение прогресса</h3>
              <p>Войдите в аккаунт MapGenie чтобы сохранять отметки о найденных предметах</p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#d86a6a', marginBottom: '20px', textAlign: 'center' }}>
              <i className="fas fa-map-marker-alt"></i> Ключевые локации на карте
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '15px',
              marginTop: '20px'
            }}>
              <div style={{ 
                background: 'rgba(50, 40, 40, 0.8)', 
                padding: '15px', 
                borderRadius: '8px',
                borderLeft: '4px solid #8a4fff'
              }}>
                <h4 style={{ color: '#ffffff' }}>Шелковое Гнездо</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.9rem' }}>Начальная локация, дом Хорнет</p>
              </div>
              
              <div style={{ 
                background: 'rgba(50, 40, 40, 0.8)', 
                padding: '15px', 
                borderRadius: '8px',
                borderLeft: '4px solid #ff4444'
              }}>
                <h4 style={{ color: '#ffffff' }}>Город Криков</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.9rem' }}>Центральный хаб с торговцами</p>
              </div>
              
              <div style={{ 
                background: 'rgba(50, 40, 40, 0.8)', 
                padding: '15px', 
                borderRadius: '8px',
                borderLeft: '4px solid #4a90e2'
              }}>
                <h4 style={{ color: '#ffffff' }}>Коралловый Лес</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.9rem' }}>Подводная область с уникальными врагами</p>
              </div>
              
              <div style={{ 
                background: 'rgba(50, 40, 40, 0.8)', 
                padding: '15px', 
                borderRadius: '8px',
                borderLeft: '4px solid #ffd700'
              }}>
                <h4 style={{ color: '#ffffff' }}>Зал Королевы</h4>
                <p style={{ color: '#c0c0c0', fontSize: '0.9rem' }}>Финал игры, тронный зал</p>
              </div>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '40px', 
            padding: '20px',
            background: 'rgba(200, 60, 60, 0.1)',
            borderRadius: '10px'
          }}>
            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>
              <i className="fas fa-external-link-alt"></i> Полная версия карты
            </h4>
            <p style={{ color: '#c0c0c0', marginBottom: '15px' }}>
              Для доступа ко всем функциям (сохранение прогресса, кастомизация) перейдите на полную версию
            </p>
            <a 
              href="https://mapgenie.io/hollow-knight-silksong/maps/pharloom" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 25px',
                background: '#c83c3c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: '500',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#d86a6a';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#c83c3c';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-external-link-alt"></i> Открыть на MapGenie
            </a>
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Интерактивная карта • Карта предоставлена MapGenie</p>
      </footer>
    </>
  );
};

export default HksMap;