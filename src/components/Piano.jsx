import "../css_styles/piano.scss";
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

const Piano = () => {
	const [currentNote, setCurrentNote] = useState(null);
	const staveRef = useRef(null);

	useEffect(() => {
		const renderer = new Renderer(staveRef.current, Renderer.Backends.SVG);
		const context = renderer.getContext();
		renderer.resize(500, 200);

		const stave = new Stave(10, 40, 480);
		stave.addClef("treble").setContext(context).draw();

		if (currentNote) {
			const notes = [
				new StaveNote({
					keys: [currentNote],
					duration: "q",
				}),
			];

			const voice = new Voice({ num_beats: 1, beat_value: 4 });
			voice.addTickables(notes);

			new Formatter().joinVoices([voice]).format([voice], 400);
			voice.draw(context, stave);
		}
	}, [currentNote]);

	const playNote = async (note) => {
		const synth = new Tone.Synth().toDestination();
		await Tone.start();
		synth.triggerAttackRelease(note, "8n");

		const formattedNote = note.replace("#", "#/").toLowerCase();
		setCurrentNote(formattedNote);
	};

	return (
		<>
			<Header />
			<div className="piano-container">
				<div ref={staveRef}></div>
				<div className="piano">
					{keys.map((key, index) => (
						<div
							key={index}
							className={`key ${key.isBlack ? "black" : "white"}`}
							onClick={() => playNote(key.note)}>
							{key.note}
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Piano;
