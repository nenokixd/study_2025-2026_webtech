import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/hks-styles.css';

const HksNavigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null);

  const handleMouseEnter = (menuType) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(menuType);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
    setMenuTimeout(timeout);
  };

  return (
    <nav className="hk-section-nav">
      <div className="hk-nav-item">
        <Link to="/hks" className="nav-main-link">
          <i className="fas fa-home"></i> Главная
        </Link>
      </div>
      
      <div 
        className="hk-nav-item" 
        onMouseEnter={() => handleMouseEnter('equipment')}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/hks/equipment" className="nav-main-link">
          Экипировка и способности
        </Link>
        
        {activeMenu === 'equipment' && (
          <div 
            className="hk-submenu"
            onMouseEnter={() => handleMouseEnter('equipment')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/hks/tools" className="hk-submenu-item">
  <i className="fas fa-tools"></i> Инструменты
</Link>
<Link to="/hks/items" className="hk-submenu-item">
  <i className="fas fa-box-open"></i> Предметы
</Link>
<Link to="/hks/crests" className="hk-submenu-item">
  <i className="fas fa-tag"></i> Знаки
</Link>
<Link to="/hks/skills" className="hk-submenu-item">
  <i className="fas fa-spider"></i> Шёлковые Умения
</Link>
<Link to="/hks/abilities" className="hk-submenu-item">
  <i className="fas fa-star"></i> Способности
</Link>
<Link to="/hks/upgrades" className="hk-submenu-item">
  <i className="fas fa-bolt"></i> Улучшения
</Link>
          </div>
        )}
      </div>
      
      <div 
        className="hk-nav-item" 
        onMouseEnter={() => handleMouseEnter('general')}
        onMouseLeave={handleMouseLeave}
      >
        <span className="nav-main-link">
          Общая информация
        </span>
        
        {activeMenu === 'general' && (
          <div 
            className="hk-submenu"
            onMouseEnter={() => handleMouseEnter('general')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/hks/hornet" className="hk-submenu-item">
  <i className="fas fa-crown"></i> Хорнет
</Link>
<Link to="/hks/patches" className="hk-submenu-item">
  <i className="fas fa-clipboard-list"></i> Патч Ноут
</Link>
<Link to="/hks/steelsoul" className="hk-submenu-item">
  <i className="fas fa-shield-alt"></i> Стальная душа
</Link>
          </div>
        )}
      </div>
      
      <div 
        className="hk-nav-item" 
        onMouseEnter={() => handleMouseEnter('world')}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/hks/world" className="nav-main-link">
          Мир
        </Link>
        
        {activeMenu === 'world' && (
          <div 
            className="hk-submenu"
            onMouseEnter={() => handleMouseEnter('world')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/hks/locations" className="hk-submenu-item">
              <i className="fas fa-map-marked-alt"></i> Локации
            </Link>
            <Link to="/hks/quests" className="hk-submenu-item">
              <i className="fas fa-scroll"></i> Мировые задания
            </Link>
            <Link to="/hks/map" className="hk-submenu-item">
  <i className="fas fa-map"></i> Интерактивная карта
</Link>
            <Link to="/hks/enemies" className="hk-submenu-item">
              <i className="fas fa-skull-crossbones"></i> Враги
            </Link>
            <Link to="/hks/bosses" className="hk-submenu-item">
              <i className="fas fa-crown"></i> Боссы
            </Link>
            <Link to="/hks/lore" className="hk-submenu-item">
              <i className="fas fa-book"></i> Лор
            </Link>
            <Link to="/hks/npcs" className="hk-submenu-item">
              <i className="fas fa-users"></i> NPCs
            </Link>
            <Link to="/hks/merchants" className="hk-submenu-item">
              <i className="fas fa-shopping-cart"></i> Торговцы
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HksNavigation;