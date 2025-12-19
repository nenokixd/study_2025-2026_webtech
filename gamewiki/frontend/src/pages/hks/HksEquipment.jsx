import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksEquipment = () => {
  const equipmentCategories = [
    { 
      id: 1, 
      title: 'Инструменты', 
      icon: 'tools', 
      description: 'Специальные приспособления для исследования мира',
      items: ['Игольный крюк', 'Шелковое веретено', 'Ремесленный набор'],
      link: '/hks/tools'  
    },
    { 
      id: 2, 
      title: 'Предметы', 
      icon: 'box-open', 
      description: 'Расходуемые предметы и ресурсы',
      items: ['Шелковые коконы', 'Древние реликвии', 'Целебные травы'],
      link: '/Hksitems.jsx' 
    },
    { 
      id: 3, 
      title: 'Знаки', 
      icon: 'tag', 
      description: 'Символы силы с пассивными бонусами',
      items: ['Знак Мотылька', 'Знак Паука', 'Знак Кокона'],
      link: '/hks/crests'  
    },
    { 
      id: 4, 
      title: 'Шёлковые Умения', 
      icon: 'spider', 
      description: 'Уникальные боевые техники Хорнет',
      items: ['Шелковый удар', 'Шелковый щит', 'Шелковая ловушка'],
      link: '/hks/skills'  
    },
    { 
      id: 5, 
      title: 'Способности', 
      icon: 'star', 
      description: 'Основные боевые и исследовательские умения',
      items: ['Парящий удар', 'Стремительный бросок', 'Шелковое восстановление'],
      link: '/hks/abilities'  
    },
    { 
      id: 6, 
      title: 'Улучшения', 
      icon: 'bolt', 
      description: 'Улучшения характеристик и снаряжения',
      items: ['Улучшение иглы', 'Усиление шелка', 'Увеличение здоровья'],
      link: '/hks/upgrades'  
    },
  ];

  return (
    <>
      <HksHeader />
      
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Экипировка и способности</h1>
            <p className="silver-text">Полный арсенал Хорнет для путешествия по Фарлуму</p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section">
          <div className="hk-section-header">
            <h2>Категории экипировки</h2>
            <p>Выберите категорию для подробной информации</p>
          </div>

          <div className="hk-equipment-grid">
            {equipmentCategories.map(cat => (
              <div key={cat.id} className="hk-equipment-card">
                <div className="hk-card-icon">
                  <i className={`fas fa-${cat.icon}`}></i>
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <ul className="hk-item-list">
                  {cat.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a href={cat.link} className="hk-card-arrow">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Экипировка • React версия</p>
      </footer>
    </>
  );
};

export default HksEquipment;