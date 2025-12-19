import React from 'react';
import '../styles-new.css';

const GameCard = ({ game }) => {
  const LinkComponent = game.internalLink ? 'a' : 'a';
  const linkProps = game.internalLink 
    ? { href: game.link }
    : { href: game.link, target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className="gw-game-card">
      <div className="gw-game-image">
        <img src={game.image} alt={game.title} />
        {game.badge && <div className="gw-game-badge">{game.badge}</div>}
      </div>
      <div className="gw-game-content">
        <h3>
          <a {...linkProps}>{game.title}</a>
        </h3>
        <p className="gw-game-genre">{game.genre}</p>
        <p className="gw-game-desc">{game.description}</p>
        <div className="gw-game-links">
          <a href={game.overviewLink || '#'} className="gw-btn-primary">Обзор</a>
          <a href={game.equipmentLink || '#'} className="gw-btn-secondary">
            {game.buttonText || 'Экипировка'}
          </a>
          <a href={game.wikiLink || '#'} className="gw-btn-icon">
            <i className="fas fa-book"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCard;