import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksCrests = () => {
  return (
    <>
      <HksHeader />
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Знаки</h1>
            <p className="silver-text">Символы силы, предоставляющие пассивные бонусы</p>
          </div>
        </section>
        <HksNavigation />
        <section className="hk-content-section">
          <div className="hk-coming-soon">
            <h3>Страница в разработке</h3>
            <p>Скоро здесь появится информация о всех знаках</p>
          </div>
        </section>
      </main>
      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Знаки</p>
      </footer>
    </>
  );
};
export default HksCrests;