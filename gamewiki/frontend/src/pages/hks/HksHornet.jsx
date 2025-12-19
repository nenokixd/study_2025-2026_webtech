import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksHornet = () => {
  return (
    <>
      <HksHeader />
      
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Хорнет</h1>
            <p className="silver-text">Принцесса-защитница Халлоунеста</p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section">
          <div className="hk-section-header">
            <h2><i className="fas fa-crown"></i> Хорнет - главная героиня Silksong</h2>
            <p>Вся информация о персонаже, истории и способностях</p>
          </div>
          
          <div className="hk-character-info">
            <div className="hk-character-grid">
              <div className="hk-character-card">
                <h3><i className="fas fa-book"></i> История</h3>
                <p>Хорнет - дочь Короля-Бледняка и Херры Узоры, принцесса-защитница Халлоунеста.</p>
              </div>
              
              <div className="hk-character-card">
                <h3><i className="fas fa-crosshairs"></i> Боевой стиль</h3>
                <p>Быстрая и точная. Использует иглу и шелковую магию. Мобильна и агрессивна.</p>
              </div>
              
              <div className="hk-character-card">
                <h3><i className="fas fa-spider"></i> Шелковая магия</h3>
                <p>Уникальная способность Хорнет. Позволяет создавать шелковые конструкции и ловушки.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong Wiki • Хорнет • React версия</p>
      </footer>
    </>
  );
};

export default HksHornet;