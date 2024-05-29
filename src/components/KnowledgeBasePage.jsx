import "../css_styles/knowledge_base.scss";

import note_lines from "../Photos/foto_note_lines.png";
import EdElrick from "../Images/Edward_Elrick_Piano.jpg";
import ownPlay from "../Videos/VID_20230423_163825.mp4";
import midiPlay from "../Videos/Midi_playing_BOTC.mp4";
import midiSound from "../Sounds/Midi_automation_playing.mp3";
import Header from "./Header";
import News from "./News";
import Footer from "./Footer";

export default function KnowledgeBase() {
	return (
		<>
			<Header />
			<div className="top-content">
				<div className="top-content__container">
					<h1 className="top-content__header">С чего начинается музыка?</h1>
					<div className="top-content__box">
						<p className="top-content__text">
							Музыка сама по себе представляет собой механические колебания
							определенной среды, в которой эта музыка собственно распространяется, в
							нашем случае этой средой является воздух по большей части. Звуковая
							волна распространяется по воздуху и вызывает упорядоченную совокупность
							колебаний барабанной перепонки в нашем ухе, именно упорядоченную с точки
							зрения человека, потому что хаотичное и случайное колебание не будет
							восприниматься как музыка.{" "}
						</p>

						<p className="top-content__text">
							Углубляться в физику не очень интересно, поэтому посмотрим чем является
							музыка с точки зрения музыканта. Звук имеет такую характеристику как
							частота, есть и другие параметры звука, но частота отвечает за тембр
							звука, можно разделить звук на высокие частоты, средние и низкие. Чем
							выше частота звука, тем выше звук и тем он звонче и чем ниже частота,
							тем ниже звук и тем он басистее, грубее.{" "}
							<span className="top-content__spec">
								Высота звука сильно влияет на восприятие, низкий звук кажется более
								тяжелым и мрачным, а высокий звук наоборот легким и возвышающим, Это
								как добро и зло, белое и черное, одно без другого не может
								существовать в принципе, вместе они создают гармонию и баланс
							</span>
						</p>

						<p className="top-content__text">
							Человек в общем-то слышит звуки в диапазоне{" "}
							<strong>от 16 до 20 000 Гц</strong> номинально. Верхний предел как и
							нижний имеет тенденцию снижаться с возрастом. Большинство взрослых людей
							не могут слышать звук частотой выше 16 кГц. Ухо само по себе не
							реагирует на частоты ниже 20 Гц, но они могут ощущаться через органы
							осязания.
						</p>
						<p className="top-content__text">
							Для чтения музыки существует нотный стан, это, скажем так, алфавит
							музыкантов, с помощью которого можно написать музыку на бумаге,
							разберемся как это работает наглядно на рисунке
						</p>
						<p className="top-content__text" style={{ fontWeight: "bolder" }}>
							На практике начинающему музыканту в большинстве случаев достаточно
							запомнить следующую схему, на которой изображены скрипичный и басовый
							ключи, правда, кроме них существуют и другие, например альтовый ключ, но
							для игры на пианино, например, в большинстве случаев должно хватить и
							этого.{" "}
							<span
								style={{
									fontStyle: "italic",
									color: "gray",
									backgroundColor: "white",
								}}>
								(Далее пояснения)
							</span>
							.
						</p>

						<div className="notes">
							<h3 className="notes__header">
								Рассмотрим рисунок.
								<br /> Здесь можно в полной мере увидеть расположение нужного нам
								ключа и добавочных линеек.{" "}
							</h3>
							<img className="notes__photo" src={note_lines} alt="" />
							<div className="notes__dscrptn">
								<p className="notes__text">
									<ul>
										<li className="notes__list-element">
											<span className="notes__arrow">
												Оранжевая стрелка указывает на изображение нот
											</span>
											, на самом деле ноты в зависимости от длительности,
											выглядят по разному, но здесь это указано схематически.{" "}
										</li>
										<li className="notes__list-element">
											<span className="notes__arrow">
												Красные стрелочки сбоку указывают на добавочные
												линейки, точнее как они выглядят на нотном стане
											</span>
											,{" "}
										</li>{" "}
										вообще в зависимости от того, какой ключ мы будем
										рассматривать, для этого ключа все остальные линейки будут
										добавочными, то есть, например, возьмем
										<span className="notes__arrow">
											скрипичный ключ, который первый и сверху и снизу
											разграничен красными линиями, ниже таким же образом
											разграничен басовый ключ
										</span>{" "}
										.
										<li className="notes__list-element">
											Так вот скрипичный ключ состоит из ПЯТИ линеек, те, что
											снизу и сверху будут для него добавочными,
										</li>{" "}
										но сразу несколько ключей тут изображены не просто так, для
										каждого ключа все линейки, кроме ПЯТИ основных, будут
										добавочными и самое интересное в том, что на этих добавочных
										линейках лежат ноты других ключей, например, если для
										скрипичного ключа его вторая добавочная линейка снизу будет
										являться пятой основной линеечкой басового ключа, также для
										басового ключа вторая добавочная линейка сверху будет
										являться первой основной линейкой скрипичного ключа, эту
										особенность или, можно сказать, закономерность можно
										использовать для запоминания нот нотного стана.
									</ul>
								</p>
							</div>
						</div>

						<p className="notes__text">
							<span className="notes__arrow">
								Розовыми стрелочками указаны наименования нот
							</span>
							. В настоящее время приняты следующие названия нот:
							<span className="notes__arrow"> До Ре Ми Фа Соль Ля Си</span>. Ноты,
							расстояние между которыми кратно октаве, называются одинаково. За эталон
							частоты ноты берётся нота «Ля» первой октавы, частота которой должна
							быть равной
							<strong style={{ backgroundColor: "antiquewhite", color: "black" }}>
								{" "}
								440 либо 432 Гц (больше поддерживаю последнюю частоту)
							</strong>
							. <br />
							Другая распространённая система обозначения нот — буквенная: ноты от до
							до си обозначаются буквами латинского алфавита
							<span className="notes__arrow">C, D, E, F, G, A, H</span>. Это — так
							называемая немецкая система обозначения, где нота си обозначается буквой
							H. Почти во всех европейских странах, кроме тех, для которых основным
							языком является английский язык, используется немецкая система.
						</p>
					</div>
				</div>
			</div>

			<div className="midl-content">
				<div className="midl-content__container">
					<div className="midl-content__review">
						<div className="midl-content__description">
							<p>
								Что входит в понятие нотной грамоты? Это все то, что относится, так
								или иначе, к записи и чтению нот; это такой своеобразный язык,
								который понятен всем музыкантам Европы и Америки. Как известно,
								каждый музыкальный звук определяется 4-мя физическими свойствами:
								высотой, продолжительностью, громкостью и тембром (окраской). И с
								помощью нотной записи музыкант получает информацию обо всех этих
								четырех свойствах того звука, который он собирается спеть или
								сыграть на музыкальном инструменте
							</p>
						</div>
						<img id="EdElrick" className="midl-content__image" src={EdElrick} alt="" />
					</div>
					<div className="midl-content__description">
						<p>
							Музыку можно записать на бумагу в виде нот, так делали раньше, когда не
							было сложной вычислительной техники и когда еще не было программистов.
						</p>
						<p>
							Музыку создавали на музыкальных инструментах и записывали ее на бумагу
							либо на виниловую пластинку
						</p>
						<p>
							Но также можно записать ее в цифровом виде на компьютер с помощью
							специализированных программ, вот наглядный пример какое великолепие
							можно создавать с помощью компьютера, при этом нотный стан в этом случае
							даже не понадобится
						</p>
					</div>
					<div id="video-twilight" className="midl-content__video">
						<iframe
							width="700"
							height="400"
							src="https://www.youtube.com/embed/eppEbY0ypG0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</div>
				</div>
			</div>

			<div class="bottom-content">
				<div class="bottom-content__container">
					<header class="bottom-content__header">
						<h1 class="bottom-content__title">Музыка и Технологии</h1>
						<p class="bottom-content__subtitle">
							Как программное обеспечение изменяет восприятие музыки
						</p>
					</header>
					<section class="bottom-content__content">
						<article class="bottom-content__article">
							<p class="bottom-content__text">
								С помощью программ можно идеально записать любую музыку и все
								параметры мелодии будут безошибочными и выверенными, в отличие от
								живой игры, где все зависит от исполнителя, он может ошибиться с
								нотой или сыграть неверную длительность ноты, то есть это можно
								услышать невооруженным ухом.
							</p>
						</article>
						<div class="bottom-content__media">
							<div class="bottom-content__media-item">
								<p class="bottom-content__media-description">
									На этом видео представлена игра на фортепиано и звук записан на
									обычный смартфон
								</p>
								<video class="bottom-content__video" controls src={ownPlay}></video>
							</div>
							<div class="bottom-content__media-item">
								<p class="bottom-content__media-description">
									На этом видео представлена игра на midi клавиатуре и звук
									записан специальной программой на компьютере, но не сведен и
									никак не обработан, а ниже видео прикреплено аудио в котором
									звук сведен и для ушей он более приятен, чем моя игра
								</p>
								<video
									class="bottom-content__video"
									controls
									src={midiPlay}></video>
								<audio
									class="bottom-content__audio"
									controls
									src={midiSound}></audio>
							</div>
						</div>
						<div class="bottom-content__original">
							<p class="bottom-content__original-description">
								Ниже оригинальное исполнение с аккомпанементом
							</p>
							<div class="bottom-content__iframe-wrapper">
								<iframe
									class="bottom-content__iframe"
									src="https://www.youtube.com/embed/5i2-Lu6ZYgc"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen></iframe>
							</div>
						</div>
					</section>
				</div>
			</div>

			<News />
			<Footer />
		</>
	);
}
