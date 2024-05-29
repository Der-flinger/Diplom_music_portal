import React from "react";
import "../css_styles/contacts.scss";

import Header from "./Header";
import Footer from "./Footer";

function Contacts() {
	return (
		<>
			<Header />
			<div className="contacts">
				<div className="contacts__overlay">
					<h1 className="contacts__title">Контакты</h1>
					<div className="contacts__info">
						<p>Вы можете связаться с нами по следующим каналам:</p>
						<ul>
							<li>Email: info@trial-piano-portal.ru</li>
							<li>Телефон: +7 (908) 303-54-50</li>
							<li>Адрес: Музыкальная улица, дом 123, город Музыка</li>
						</ul>
					</div>
					<form className="contacts__form">
						<h2 className="contacts__form-title">Свяжитесь с нами</h2>
						<label>
							Имя:
							<input type="text" name="name" placeholder="имя" />
						</label>
						<label>
							Ваш Email:
							<input type="email" name="email" placeholder="шаблон: @mail.ru" />
						</label>
						<label>
							Сообщение:
							<textarea name="message"></textarea>
						</label>
						<button type="submit">Отправить</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Contacts;
