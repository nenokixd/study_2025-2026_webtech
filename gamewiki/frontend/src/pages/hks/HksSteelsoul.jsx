import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksSteelsoul = () => {
  return (
    <>
      <HksHeader />
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Стальная душа</h1>
            <p className="silver-text">Режим повышенной сложности с одной жизнью</p>
          </div>
        </section>
        <HksNavigation />
        <section className="hk-content-section">
          <div className="hk-coming-soon">
            <h3>Страница в разработке</h3>
            <p>Скоро здесь появится руководство по режиму Стальная душа</p>
          </div>
        </section>
      </main>
      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Стальная душа</p>
      </footer>
    </>
  );
};
export default HksSteelsoul;