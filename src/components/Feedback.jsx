import Header from "./Header";
import React, { useState, useEffect } from "react";
import "../css_styles/feedback.scss";
import Footer from "./Footer";
import background from "../Images/Note_picture.png";
import { Link } from "react-router-dom";

const Feedback = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		rating: 0,
	});

	const [rating, setRating] = useState([]);

	useEffect(() => {
		// Загружаем файл из Local Storage
		const storedRating = JSON.parse(localStorage.getItem("rating")) || [];
		setRating(storedRating);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Добавляем новую оценку в массив
		const updatedRating = [...rating, formData];
		setRating(updatedRating);

		// Сохраняем оценки в Local Storage
		localStorage.setItem("rating", JSON.stringify(updatedRating));

		// Очистка формы после отправки ответа
		setFormData({
			name: "",
			email: "",
			message: "",
			rating: 0,
		});

		console.log("Форма отправлена успешно", updatedRating);
	};

	const handleRatingChange = (e) => {
		setFormData((prevData) => ({ ...prevData, rating: parseInt(e.target.value, 10) }));
	};

	return (
		<>
			<Header />
			<p className="feedback__text">
				На этом разделе сайта вы можете поделиться своим мнением, поделиться предложениями и
				пожеланиями, оценить работу сайта или просто оставить упоминание о том, что вы здесь
				были
				<br />
				<br />
				Обратная связь поможет сделать нас лучше. <br /> Если вам нужно связаться с нами, то
				нажмите
				<Link className="feedback__link" to="/Contacts">
					сюда
				</Link>
			</p>

			<div className="feedback" style={{ backgroundImage: `url(${background})` }}>
				<h2 className="feedback__title">Контактная форма</h2>
				<form className="feedback__form" onSubmit={handleSubmit}>
					<div className="feedback__field">
						<label htmlFor="name" className="feedback__label">
							Имя:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="feedback__input"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="feedback__field">
						<label htmlFor="email" className="feedback__label">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="feedback__input"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="feedback__field">
						<label htmlFor="message" className="feedback__label">
							Сообщение:
						</label>
						<textarea
							id="message"
							name="message"
							className="feedback__textarea"
							value={formData.message}
							onChange={handleChange}
							required></textarea>
					</div>
					<div className="feedback__field">
						<label className="feedback__label">Оцените этот сайт:</label>
						<div className="feedback__rating">
							{[1, 2, 3, 4, 5].map((rating) => (
								<label key={rating}>
									<input
										type="radio"
										name="rating"
										value={rating}
										checked={formData.rating === rating}
										onChange={handleRatingChange}
									/>
									{rating}
								</label>
							))}
						</div>
					</div>
					<button type="submit" className="feedback__button">
						Отправить
					</button>
				</form>
				<div className="feedback__rating-summary">
					<h3>Оценки:</h3>
					<ul>
						{rating.map((rating, index) => (
							<li key={index}>
								{rating.name} ({rating.email}): {rating.rating} - {rating.message}
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Feedback;
