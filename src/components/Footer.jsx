import "../css_styles/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer class="footer">
			<div class="footer__container">
				<div class="footer__left">
					<h2 class="footer__logo">trial-piano-portal.ru</h2>
					<p class="footer__description">Базовые знания для понимания музыки и нот</p>
					<p class="footer__copyright">© 2024</p>
				</div>
				<div class="footer__right">
					<h3 class="footer__title">Страницы</h3>
					<ul class="footer__list">
						<li class="footer__list-item">
							<Link className="footer__link" to="/SiteMap">
								Карта сайта
							</Link>
						</li>
						<li class="footer__list-item">
							<Link className="footer__link" to="/Contacts">
								Техподдержка
							</Link>
						</li>
						<li class="footer__list-item">
							<Link className="footer__link" to="/PrivacyPolicy">
								Политика конфиденциальности
							</Link>
						</li>
						<li class="footer__list-item">
							<Link className="footer__link" to="/PrivacyPolicy">
								Пользовательское соглашение
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
