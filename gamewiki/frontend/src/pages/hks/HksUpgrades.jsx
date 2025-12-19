import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksUpgrades = () => {
  return (
    <>
      <HksHeader />
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Улучшения</h1>
            <p className="silver-text">Улучшения характеристик и модификации снаряжения</p>
          </div>
        </section>
        <HksNavigation />
        <section className="hk-content-section">
          <div className="hk-coming-soon">
            <h3>Страница в разработке</h3>
            <p>Скоро здесь появится информация об улучшениях</p>
          </div>
        </section>
      </main>
      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Улучшения</p>
      </footer>
    </>
  );
};
export default HksUpgrades;