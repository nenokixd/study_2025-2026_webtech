import React from 'react';
import HksHeader from './components/HksHeader';
import HksNavigation from './components/HksNavigation';
import './styles/hks-styles.css';

const HksTools = () => {
  const tools = [
    {
      id: 1,
      name: 'Игольный Крюк',
      icon: 'anchor',
      description: 'Основной инструмент для передвижения. Позволяет цепляться за специальные поверхности и раскачиваться.',
      uses: ['Перемещение по вертикальным поверхностям', 'Достижение труднодоступных мест', 'Уклонение от атак'],
      location: 'Начинает игру с этим инструментом'
    },
    {
      id: 2,
      name: 'Шелковое Веретено',
      icon: 'spinner',
      description: 'Устройство для создания шелковых нитей. Используется для крафта и создания ловушек.',
      uses: ['Создание шелковых платформ', 'Изготовление ловушек для врагов', 'Ремонт оборудования'],
      location: 'Находится в Шелковом Гнезде после первой встречи с ткачом'
    },
    {
      id: 3,
      name: 'Ремесленный Набор',
      icon: 'toolbox',
      description: 'Набор инструментов для создания и улучшения предметов.',
      uses: ['Крафт расходных предметов', 'Улучшение инструментов', 'Создание специальных снарядов'],
      location: 'Купить у торговца в Городе Криков'
    },
    {
      id: 4,
      name: 'Картографические Инструменты',
      icon: 'map',
      description: 'Инструменты для создания и обновления карты Фарлума.',
      uses: ['Автоматическое составление карты', 'Отметка важных мест', 'Поиск скрытых проходов'],
      location: 'Найти у картографа в Забытых Галереях'
    },
    {
      id: 5,
      name: 'Светлячковая Лампа',
      icon: 'lightbulb',
      description: 'Источник света для темных областей. Привлекает светлячков.',
      uses: ['Освещение темных пещер', 'Привлечение полезных существ', 'Разгадывание световых головоломок'],
      location: 'Получить в Свечном Храме после выполнения квеста'
    },
    {
      id: 6,
      name: 'Резонансный Камертон',
      icon: 'music',
      description: 'Инструмент, реагирующий на скрытые частоты и вибрации.',
      uses: ['Обнаружение скрытых проходов', 'Активация древних механизмов', 'Призыв особых NPC'],
      location: 'Награда за победу над боссом Звенящий Страж'
    }
  ];

  return (
    <>
      <HksHeader />
      
      <main className="hk-container">
        <section className="hk-hero">
          <div className="hk-hero-content">
            <h1 className="red-glow">Инструменты</h1>
            <p className="silver-text">Специальные предметы, которые дают Хорнет атакующие и защитные эффекты, которые она может использовать как в бою, так и вне его. </p>
          </div>
        </section>

        <HksNavigation />

        <section className="hk-content-section">
          <div className="hk-section-header">
            <h2><i className="fas fa-tools"></i> Инструменты Хорнет</h2>
            <p>Описание, применение и способ получения каждого инструмента</p>
          </div>

          <div className="hk-equipment-grid">
            {tools.map(tool => (
              <div key={tool.id} className="hk-equipment-card">
                <div className="hk-card-icon">
                  <i className={`fas fa-${tool.icon}`}></i>
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                
                <div style={{ margin: '15px 0' }}>
                  <h4 style={{ color: '#d86a6a', fontSize: '1rem', marginBottom: '8px' }}>
                    <i className="fas fa-check-circle"></i> Применение:
                  </h4>
                  <ul className="hk-item-list">
                    {tool.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(200, 60, 60, 0.1)', borderRadius: '6px' }}>
                  <strong style={{ color: '#c83c3c' }}><i className="fas fa-map-marker-alt"></i> Местонахождение:</strong>
                  <p style={{ marginTop: '5px', color: '#e8e8e8' }}>{tool.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hk-coming-soon" style={{ marginTop: '40px' }}>
            <h3><i className="fas fa-hammer"></i> Система крафта</h3>
            <p>Используйте инструменты вместе для создания новых предметов:</p>
            <ul className="hk-features-list">
              <li><strong>Шелковое Веретено + Ремесленный Набор</strong> = Шелковые гранаты</li>
              <li><strong>Картографические Инструменты + Светлячковая Лампа</strong> = Детальная карта пещер</li>
              <li><strong>Резонансный Камертон + Игольный Крюк</strong> = Вибрационный сканер</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="hk-footer">
        <p>Hollow Knight: Silksong • Инструменты</p>
      </footer>
    </>
  );
};

export default HksTools;