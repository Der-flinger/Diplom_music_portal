import "../css_styles/piano.scss";
import React, { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Renderer, Stave, StaveNote, Voice, Formatter } from "vexflow";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const keys = [
	{ note: "C/3", isBlack: false },
	{ note: "C#/3", isBlack: true },
	{ note: "D/3", isBlack: false },
	{ note: "D#/3", isBlack: true },
	{ note: "E/3", isBlack: false },
	{ note: "F/3", isBlack: false },
	{ note: "F#/3", isBlack: true },
	{ note: "G/3", isBlack: false },
	{ note: "G#/3", isBlack: true },
	{ note: "A/3", isBlack: false },
	{ note: "A#/3", isBlack: true },
	{ note: "B/3", isBlack: false },
	{ note: "C/4", isBlack: false },
	{ note: "C#/4", isBlack: true },
	{ note: "D/4", isBlack: false },
	{ note: "D#/4", isBlack: true },
	{ note: "E/4", isBlack: false },
	{ note: "F/4", isBlack: false },
	{ note: "F#/4", isBlack: true },
	{ note: "G/4", isBlack: false },
	{ note: "G#/4", isBlack: true },
	{ note: "A/4", isBlack: false },
	{ note: "A#/4", isBlack: true },
	{ note: "B/4", isBlack: false },
	{ note: "C/5", isBlack: false },
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
