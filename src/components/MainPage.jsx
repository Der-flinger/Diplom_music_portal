import Header from "./Header";
import "../css_styles/main.scss";
import Footer from "./Footer";

import slide1 from "../Photos/slide1.jpg";
import slide2 from "../Photos/slide2.jpg";
import slide3 from "../Photos/slide3.jpg";
import slide4 from "../Photos/slide4.png";
import slide5 from "../Photos/slide5.png";
import slide6 from "../Photos/slide6.png";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
	{ id: 1, src: slide1, alt: "Слайд 1" },
	{ id: 2, src: slide4, alt: "Слайд 2" },
	{ id: 3, src: slide2, alt: "Слайд 3" },
	{ id: 4, src: slide5, alt: "Слайд 4" },
	{ id: 5, src: slide3, alt: "Слайд 5" },
	{ id: 6, src: slide6, alt: "Слайд 6" },
];

const Main = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 4000);
		return () => clearInterval(interval);
	}, [currentSlide]);

	return (
		<>
			<Header />

			<main className="main-content">
				<div className="main-content__container">
					<section className="slider">
						<div className="slider__wrapper">
							{slides.map((slide, index) => (
								<div
									className={`slider__item ${
										index === currentSlide ? "active" : ""
									}`}
									key={slide.id}>
									<img src={slide.src} alt={slide.alt} />
								</div>
							))}
						</div>
						<button className="slider__button slider__button--prev" onClick={prevSlide}>
							&#10094;
						</button>
						<button className="slider__button slider__button--next" onClick={nextSlide}>
							&#10095;
						</button>
					</section>
					<div className="main-content__body">
						<aside className="main-content__sidebar">
							<nav className="sidebar__nav">
								<ul className="sidebar__list">
									<li className="sidebar__item">
										<Link className="sidebar__item" to="/">
											Главная
										</Link>
									</li>
									<li className="sidebar__item">
										<Link className="sidebar__item" to="/KnowledgeBase">
											Теория музыки
										</Link>
									</li>
									<li className="sidebar__item">
										<a href="">Тренировка нот</a>
									</li>
									<li className="sidebar__item">
										<Link className="sidebar__item" to="/Instruments">
											Инструменты
										</Link>
									</li>
									<li className="sidebar__item">
										<Link className="sidebar__item" to="/Contacts">
											Контакты
										</Link>
									</li>
								</ul>
							</nav>
						</aside>
						<section className="main-content__info">
							<div className="welcome">
								<h2 className="welcome__title">
									Добро пожаловать на наш Музыкальный Портал!
								</h2>
								<p className="welcome__text">
									На нашем портале вы найдете уроки, статьи и видео о создании
									музыки, звуко-записи и музыкальных инструментах.
								</p>
								<p className="welcome__text">
									Здесь вы можете узнать больше о музыкальной теории, практике и
									многом другом.
								</p>
							</div>
							<div className="info">
								<h2 className="info__title">О нашем портале</h2>
								<p className="info__text">
									Наш портал предназначен для всех, кто интересуется музыкой.
									Здесь вы найдете много полезной информации, которая поможет вам
									улучшить свои навыки и знания в области музыки.
								</p>
								<p className="info__text">
									Этот информационный ресурс создан в обученческих целях и не
									обладает всем тем огромным функционалом, которым мог бы
									обладать, но имеет тот функционал, на который способен
									разработчик этого портала, некоторые функциональные элементы
									написаны с помощью нейросети и опытным путем было выявлено, что
									сделать это совсем не просто, но в целом помощь от современных
									ИИ не оценима
								</p>
							</div>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default Main;
