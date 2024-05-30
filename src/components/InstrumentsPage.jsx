import Footer from "./Footer";
import Header from "./Header";

import "../css_styles/instruments.scss";
import { Link } from "react-router-dom";
import pianoRhythm from "../Images/pianoRhythm.jpg";
import sharedPiano from "../Images/SharedPiano.png";
import virtualPiano from "../Images/VirtualPiano.jpg";
import onlinePianoWithMidi from "../Images/midiPiano.jpg";
import noteTrainerExt from "../Images/NoteTrainer.jpg";
import PropTypes from "prop-types";
import myPiano from "../Images/myPiano.png";
import noteTrainerOwn from "../Images/noteTrainerOwn.png";

const piano = "/Piano";
// добавить свои наработки
const ownInstruments = [
	{
		name: "MyPiano",
		image: myPiano,
		link: "/Piano",
	},
	{
		name: "NoteTrainer",
		image: noteTrainerOwn,
		link: "/NoteTrainer",
	},
];
// добавить сторонние тренажеры и инструменты
const externalInstruments = [
	{ name: "VirtulaPiano(MIDI)", image: pianoRhythm, link: "https://app.pianorhythm.io" },
	{
		name: "SharedPiano(Midi)",
		image: sharedPiano,
		link: piano,
	},
	{
		name: "VirtualPiano(NoMidi)",
		image: virtualPiano,
		link: "https://www.music-theory.ru/index.php?option=com_content&view=article&id=460&Itemid=338&lang=ru",
	},
	{
		name: "OnlinePiano(Midi)",
		image: onlinePianoWithMidi,
		link: "https://multiplayerpiano.com",
	},
	{
		name: "NoteTrainerOnline",
		image: noteTrainerExt,
		link: "http://bi2o2t.ru/training/notes",
	},
];

function InstrumentList({ instruments }) {
	return (
		<div className="instrument">
			<div className="instrument__container">
				{instruments.map((instrument, index) => (
					<Link to={instrument.link} key={index} className="instrument__card">
						<img
							src={instrument.image}
							alt={instrument.name}
							className="instrument__image"
						/>
						<div className="instrument__overlay">
							<div className="instrument__name">{instrument.name}</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
InstrumentList.propTypes = {
	instruments: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,
};
export default function Instruments() {
	return (
		<>
			<Header />

			<h2 className="instrument__category-text">Инструменты в разработке</h2>
			<InstrumentList instruments={ownInstruments} />
			<h2 className="instrument__category-text">Сторонние инструменты и тренажеры</h2>
			<InstrumentList instruments={externalInstruments} />
			<Footer />
		</>
	);
}
