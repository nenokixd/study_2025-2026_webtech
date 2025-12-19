import React from 'react';
import '../styles-new.css';

const GameSection = () => {
  return (
    <section className="gw-hero">
      <div className="gw-hero-content">
        <h2>Гайды</h2>
        <p>Cборник руководств и различной информации, рассказывающей о различных аспектах игр</p>
        <div className="gw-hero-stats">
          <div className="stat">
            <span className="number">4(1)</span>
            <span className="label">Игр</span>
          </div>
          <div className="stat">
            <span className="number">5,000+(1)</span>
            <span className="label">Гайдов</span>
          </div>
          <div className="stat">
            <span className="number">5(10)</span>
            <span className="label">Страниц</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;