import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksItems = () => {
  return (
    <>
      <HksHeader />
      
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Предметы</h1>
            <p className="silver-text">Расходуемые предметы и ресурсы для крафта и выживания</p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section">
          <div className="hk-section-header">
            <h2><i className="fas fa-box-open"></i> Все предметы Hollow Knight: Silksong</h2>
            <p>Собирайте, создавайте и используйте предметы для путешествия по Фарлуму</p>
          </div>

          <div className="hk-coming-soon">
            <h3>Страница в разработке</h3>
            <p>Мы активно работаем над наполнением информации о предметах. Скоро здесь появится:</p>
            <ul className="hk-features-list">
              <li>Полный список всех предметов</li>
              <li>Эффекты и применение каждого предмета</li>
              <li>Рецепты крафта и необходимые материалы</li>
              <li>Локации где можно найти предметы</li>
            </ul>
            <a href="/hks/equipment" className="hk-cta-button">
              <i className="fas fa-arrow-left"></i> Вернуться к экипировке
            </a>
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong Wiki • Предметы • React версия</p>
      </footer>
    </>
  );
};

export default HksItems;