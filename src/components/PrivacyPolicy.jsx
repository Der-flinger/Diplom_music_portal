import React from "react";
import "../css_styles/privacyPolicy.scss";
import Header from "./Header";
import Footer from "./Footer";

function PrivacyPolicy() {
	return (
		<>
			<Header />
			<div className="policy-container">
				<div className="privacy-policy">
					<h1 className="privacy-policy__title">Политика конфиденциальности</h1>
					<p className="privacy-policy__intro">
						Добро пожаловать на наш музыкальный портал. Ваша конфиденциальность очень
						важна для нас.
					</p>

					<h2 className="privacy-policy__section-title">1. Сбор информации</h2>
					<p className="privacy-policy__text">
						Мы собираем различные виды информации в целях предоставления и улучшения
						наших услуг:
					</p>
					<ul>
						<li>
							Личные данные, такие как имя, адрес электронной почты, номер телефона.
						</li>
						<li>
							Информация об использовании сайта, включая файлы cookie и данные о
							посещениях.
						</li>
					</ul>

					<h2 className="privacy-policy__section-title">2. Использование информации</h2>
					<p className="privacy-policy__text">Собранная информация используется для:</p>
					<ul>
						<li>Предоставления и улучшения наших услуг.</li>
						<li>Обеспечения персонализированного пользовательского опыта.</li>
						<li>Отправки информационных и маркетинговых материалов.</li>
					</ul>

					<h2 className="privacy-policy__section-title">3. Защита информации</h2>
					<p className="privacy-policy__text">
						Мы принимаем соответствующие меры безопасности для защиты ваших личных
						данных от несанкционированного доступа, изменения или раскрытия.
					</p>

					<h2 className="privacy-policy__section-title">
						4. Изменения в политике конфиденциальности
					</h2>
					<p className="privacy-policy__text">
						Мы можем периодически обновлять нашу политику конфиденциальности. Изменения
						будут опубликованы на этой странице.
					</p>

					<h2 className="privacy-policy__section-title">5. Контактная информация</h2>
					<p className="privacy-policy__text">
						Если у вас есть вопросы или предложения по поводу нашей политики
						конфиденциальности, пожалуйста, свяжитесь с нами по адресу:
						info@trial-piano-portal.ru
					</p>
				</div>

				<div className="user-agreement">
					<h1 className="user-agreement__title">Пользовательское соглашение</h1>
					<p className="user-agreement__intro">
						Настоящее пользовательское соглашение регулирует отношения между
						пользователем и нашим музыкальным порталом.
					</p>

					<h2 className="user-agreement__section-title">1. Общие положения</h2>
					<p className="user-agreement__text">
						Пользуясь нашим сайтом, вы соглашаетесь с условиями данного
						пользовательского соглашения.
					</p>

					<h2 className="user-agreement__section-title">
						2. Права и обязанности пользователя
					</h2>
					<p className="user-agreement__text">Пользователь имеет право на:</p>
					<ul>
						<li>Получение информации о работе сайта.</li>
						<li>Использование всех доступных сервисов сайта.</li>
					</ul>
					<p className="user-agreement__text">Пользователь обязуется:</p>
					<ul>
						<li>Не нарушать работоспособность сайта.</li>
						<li>Не использовать информацию с сайта в незаконных целях.</li>
					</ul>

					<h2 className="user-agreement__section-title">
						3. Права и обязанности администрации
					</h2>
					<p className="user-agreement__text">Администрация имеет право:</p>
					<ul>
						<li>Изменять содержание сайта в любое время.</li>
						<li>Приостанавливать доступ к сайту для проведения технических работ.</li>
					</ul>

					<h2 className="user-agreement__section-title">4. Ответственность сторон</h2>
					<p className="user-agreement__text">
						Администрация не несет ответственности за возможный ущерб, причиненный
						пользователю в результате использования сайта.
					</p>

					<h2 className="user-agreement__section-title">
						5. Изменения в пользовательском соглашении
					</h2>
					<p className="user-agreement__text">
						Мы можем периодически обновлять данное пользовательское соглашение.
						Изменения будут опубликованы на этой странице.
					</p>

					<h2 className="user-agreement__section-title">6. Контактная информация</h2>
					<p className="user-agreement__text">
						Если у вас есть вопросы или предложения по поводу нашего пользовательского
						соглашения, пожалуйста, свяжитесь с нами по адресу:
						info@trial-piano-portal.ru
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PrivacyPolicy;
