import "../css_styles/noteTrainer.scss";
import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const keys = [
	{ note: "C3", isBlack: false },
	{ note: "c#3", isBlack: true },
	{ note: "d3", isBlack: false },
	{ note: "d#3", isBlack: true },
	{ note: "e3", isBlack: false },
	{ note: "f3", isBlack: false },
	{ note: "f#3", isBlack: true },
	{ note: "g3", isBlack: false },
	{ note: "g#3", isBlack: true },
	{ note: "a3", isBlack: false },
	{ note: "a#3", isBlack: true },
	{ note: "b3", isBlack: false },
	{ note: "c4", isBlack: false },
	{ note: "c#4", isBlack: true },
	{ note: "d4", isBlack: false },
	{ note: "d#4", isBlack: true },
	{ note: "e4", isBlack: false },
	{ note: "f4", isBlack: false },
	{ note: "f#4", isBlack: true },
	{ note: "g4", isBlack: false },
	{ note: "g#4", isBlack: true },
	{ note: "a4", isBlack: false },
	{ note: "a#4", isBlack: true },
	{ note: "b4", isBlack: false },
	{ note: "c5", isBlack: false },
];

function NoteTrainer() {
	return (
		<>
			<Header />
			<div className="note__container">
				<h2 className="note__title">
					Ведутся ТЕХНИЧЕСКИЕ работы, просим прощения за неполадки
				</h2>
			</div>
			<Footer />
		</>
	);
}

export default NoteTrainer;
