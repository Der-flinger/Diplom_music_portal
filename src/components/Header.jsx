import logo from "../Images/Logo_picture.png";
import "../css_styles/header.scss";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
			<div className="header__line">
				<div className="header__logo">
					<Link className="header__logo-link" to="/">
						<img src={logo} height="150" alt="headerLogo" />
					</Link>
				</div>
				<nav className="nav-search">
					<ul className="nav-search__navigation">
						<li>
							{/* <a href="index.html">Главное</a> */}
							<Link className="nav-search__item" to="/">
								Главная
							</Link>
						</li>
						<li>
							{/* <a href="instruments.html">Инструментарий</a> */}
							<Link className="nav-search__item" to="/Instruments">
								Инструментарий
							</Link>
						</li>
						<li>
							{/* <a href="knowledge_base.html">База знаний</a> */}
							<Link className="nav-search__item" to="/KnowledgeBase">
								База знаний
							</Link>
						</li>
						<li>
							{/* <a href="Feedback.html">Контакты</a> */}
							<Link className="nav-search__item" to="/Feedback">
								Обратная связь
							</Link>
						</li>
					</ul>
					<div className="nav-search__search">
						<input
							className="nav-search__search-box"
							type="search"
							placeholder="Поиск по составу"
							aria-label="Поиск"
						/>
					</div>
				</nav>
			</div>
			<hr className="header__line-divider" />
		</header>
	);
}

export default Header;
