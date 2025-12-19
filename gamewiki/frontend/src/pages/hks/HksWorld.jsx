import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksWorld = () => {
  return (
    <>
      <HksHeader />
      
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Мир Фарлума</h1>
            <p className="silver-text">Королевство, полное тайн и опасностей</p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section">
          <div className="hk-section-header">
            <h2>Исследуйте мир Hollow Knight: Silksong</h2>
            <p>Локации, персонажи, квесты и лор</p>
          </div>

          <div className="hk-info-grid">
            <a href="/client/hks/world/hks-locations.html" className="hk-info-card" style={{ textDecoration: 'none' }}>
              <h3><i className="fas fa-map-marked-alt"></i> Локации</h3>
              <p>Все регионы Фарлума</p>
            </a>
            
            <a href="/client/hks/world/hks-enemies.html" className="hk-info-card" style={{ textDecoration: 'none' }}>
              <h3><i className="fas fa-skull-crossbones"></i> Враги</h3>
              <p>Все противники и боссы</p>
            </a>
            
            <a href="/client/hks/world/hks-npcs.html" className="hk-info-card" style={{ textDecoration: 'none' }}>
              <h3><i className="fas fa-users"></i> Персонажи</h3>
              <p>NPC и их истории</p>
            </a>
            
            <a href="/client/hks/world/hks-lore.html" className="hk-info-card" style={{ textDecoration: 'none' }}>
              <h3><i className="fas fa-book"></i> Лор</h3>
              <p>История и мифология</p>
            </a>
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Мир</p>
      </footer>
    </>
  );
};

export default HksWorld;