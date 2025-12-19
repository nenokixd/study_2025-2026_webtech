import React from 'react';
import Header from '../components/Header';
import GameSection from '../components/GameSection';
import GameCard from '../components/GameCard'; 
import '../styles-new.css';

const Home = () => {
// Карточки с играми на глав странице
  const games = [
    {
      id: 1,
      title: "Hollow Knight: Silksong",
      genre: "Метроидвания • Платформер",
      description: "Новое приключение Хорнет в королевстве Фарлум. Полная база данных экипировки, способностей и секретов(илинет).",
      image: "https://www.well-played.com.au/wp-content/uploads/2022/06/silksong.png",
      badge: "Ожидается в доработке",
      link: "/hks",
      internalLink: false 
    },
    {
      id: 2,
      title: "Elden Ring",
      genre: "RPG • Открытый мир",
      description: "Билды, оружия, заклинания и секреты Междуземья.",
      image: "https://upload.wikimedia.org/wikipedia/ru/7/7c/Elden_Ring_-_cover.jpg",
      badge: "ctrl c ctrl v",
      link: "/elden-ring.html",
      internalLink: false,
      buttonText: "Билды"
    },
    {
      id: 3,
      title: "The Witcher 3: Wild Hunt",
      genre: "RPG • Фэнтези",
      description: "Все квесты, противники, алхимия и секреты мира Ведьмака. Полное руководство по Вызиме и Скеллиге.",
      image: "https://gaming-cdn.com/images/products/268/616x353/the-witcher-3-wild-hunt-pc-gog-com-cover.jpg?v=1761661629",
      badge: "Скоро",
      link: "/witcher3.html",
      internalLink: false,
      overviewLink: "/witcher3.html",
      equipmentLink: "#",
      wikiLink: "#",
      buttonText: "Квесты"
    },
    {
      id: 4,
      title: "Cyberpunk 2077",
      genre: "RPG • Киберпанк",
      description: "Перки, киберимпланты, оружие и секреты Найт-Сити. Гайды по всем сюжетным линиям и концовкам.",
      image: "https://newcdn.igromania.ru/mnt/games/4/9/4/a/d/0/14727/73f7677257f9bfa6_original.jpg",
      badge: "Скоро",
      link: "/cyberpunk2077.html",
      internalLink: false,
      overviewLink: "/cyberpunk2077.html",
      equipmentLink: "#",
      wikiLink: "#",
      buttonText: "Перки"
    }
  
  ];

  return (
    <>
      <Header />
      <main className="container">
        <GameSection />
        
        {/* Секция игр */}
        <section className="gw-section">
          <div className="gw-section-header">
            <h2><i className="fas fa-fire"></i> Единственные 4 игры на сайте</h2>
            <a href="#all-games" className="gw-view-all">
              Все игры <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div className="gw-games-grid">
            {games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
        
        {/* Новости */}
        <section className="gw-section">
          <div className="gw-section-header">
            <h2><i className="fas fa-newspaper"></i> Последние обновления</h2>
          </div>
          
          <div className="gw-news-grid">
            <div className="gw-news-card">
              <div className="gw-news-date"> Вчера</div>
              <h3><a href="#">Hollow Knight Silksong наполовину переехал на react</a></h3>
              <p>Вот бы выжить.</p>
            </div>
            
            <div className="gw-news-card">
              <div className="gw-news-date">7 Дней назад</div>
              <h3><a href="#">SoapWiki переехал на React</a></h3>
              <p>Теперь главная страница работает на React.</p>
            </div>
            
            <div className="gw-news-card">
              <div className="gw-news-date">Месяц назад</div>
              <h3><a href="#">Добавлена локальная регистрация</a></h3>
              <p>Теперь пользователи могут регистрироваться.</p>
            </div>

            <div className="gw-news-card">
              <div className="gw-news-date">Месяц назад</div>
              <h3><a href="#">Добавлены страницы Cyberpunk 2077, The Witcher 3, Elden Ring</a></h3>
              <p>Вот бы им переехать на react.</p>
            </div>

            <div className="gw-news-card">
              <div className="gw-news-date">1.5 Месяца назад</div>
              <h3><a href="#">Добавлена страница Hollow Knight Silksong</a></h3>
              <p>Когда-нибудь переедет на react.</p>
          </div>
          </div>
        </section>
      </main>
      
      <footer className="gw-footer">
        <div className="container">
          <div className="gw-footer-content">
            <div className="gw-footer-section">
              <h3>SoapWiki</h3>
              <p>Недоделанный гайд за 3 месяца.</p>
            </div>
          </div>
          <div className="gw-footer-bottom">
            <p>&copy; 2025 SoapWiki. Все права защищены или нет.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;