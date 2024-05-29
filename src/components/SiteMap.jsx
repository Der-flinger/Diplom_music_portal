import { Link } from "react-router-dom";
import React from "react";
import "../css_styles/siteMap.scss";
import Footer from "./Footer";
import Header from "./Header";

function SiteMap() {
	return (
		<>
			<Header />
			<div className="site-map">
				<h1 className="site-map__title">Карта сайта</h1>
				<div className="site-map__sections">
					<div className="site-map__section">
						<h2 className="site-map__section-title">Основное меню</h2>
						<ul>
							<li>
								<Link to="/">Главная</Link>
							</li>
							<li>
								<Link to="/instruments">Инструментарий</Link>
							</li>
							<li>
								<Link to="/knowledgeBase">База знаний</Link>
							</li>
							<li>
								<Link to="/Feedback">Обратная связь</Link>
							</li>
						</ul>
					</div>

					<div className="site-map__section">
						<h2 className="site-map__section-title">Инструментарий</h2>
						<ul>
							<li>
								<a href="/instruments/piano">Фортепиано</a>
							</li>
							<li>
								<a href="/instruments/guitar">Гитара</a>
							</li>
							<li>
								<a href="/instruments/drums">Барабаны</a>
							</li>
						</ul>
					</div>

					<div className="site-map__section">
						<h2 className="site-map__section-title">База знаний</h2>
						<ul>
							<li>
								<a href="/knowledge-base/music-theory">Теория музыки</a>
							</li>
							<li>
								<a href="/knowledge-base/history">История музыки</a>
							</li>
							<li>
								<a href="/knowledge-base/composers">Композиторы</a>
							</li>
						</ul>
					</div>

					<div className="site-map__section">
						<h2 className="site-map__section-title">Обратная связь</h2>
						<ul>
							<li>
								<Link to="/Feedback">Форма обратной связи</Link>
							</li>
							<li>
								<Link to="/Contacts">Контактная информация</Link>
							</li>
						</ul>
					</div>

					{/* <div className="site-map__section">
						<h2 className="site-map__section-title"></h2>
						<ul>
							<li>
								<a href="/contacts"></a>
							</li>
						</ul>
					</div> */}

					<div className="site-map__section">
						<h2 className="site-map__section-title">Политика конфиденциальности</h2>
						<ul>
							<li>
								<Link to="/PrivacyPolicy">Политика конфиденциальности</Link>
							</li>
							<li>
								<Link to="/PrivacyPolicy">Пользовательское соглашение</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default SiteMap;
