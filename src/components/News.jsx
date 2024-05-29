import "../css_styles/news.scss";
import sound from "../Images/sound.jpg";
import notes from "../Images/notes.jpg";
import accords from "../Images/accords.jpg";

const newsArticles = [
	{
		id: 1,
		title: "Что такое звук",
		date: "05.05.2024",
		description:
			"Про звук уже говорилось выше, но для самых любознательных рекомендую более углубленно ознакомиться с данным понятием по этой ссылке.",
		image: sound,
		link: "https://m-focus.ru/zvuk-vidy-harakteristiki/",
	},
	{
		id: 2,
		title: "Что такое ноты",
		date: "21.05.2024",
		description:
			"Данная статья позволит вам ознакомиться с нотами и нотным станом намного ближе, более познавательного контента по этой теме не найти",
		image: notes,
		link: "https://www.music-theory.ru/index.php?option=com_content&view=article&id=11&Itemid=181&lang=ru",
	},
	{
		id: 3,
		title: "Аккорды",
		date: "08.03.2024",
		description:
			"Аккорды важная часть обучения, для того, чтобы играть на любом инструменте, знание оных поможет в освоении многих несложных произведений, но очень эффектных, в этой статье очень наглядное описание для подробного изучения",
		image: accords,
		link: "https://muz-teoretik.ru/akkordy-v-muzyke/",
	},
];

function News() {
	const handleLinkClick = (event, link) => {
		event.preventDefault();
		const userConfirmed = window.confirm(
			"Вы переходите на другой портал, но не беспокойтесь, это проверенный источник"
		);
		if (userConfirmed) {
			window.location.href = link;
		}
	};
	return (
		<div className="news">
			{newsArticles.map((article) => (
				<div key={article.id} className="news__article">
					<img src={article.image} alt={article.title} className="news__image" />
					<div className="news__content">
						<h3 className="news__title">
							<a
								href={article.link}
								onClick={(event) => handleLinkClick(event, article.link)}>
								{article.title}
							</a>
						</h3>
						<p className="news__date">{article.date}</p>
						<p className="news__description">{article.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default News;
