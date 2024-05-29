import "../css_styles/piano.scss";
// Piano.jsx
import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import { Renderer, Stave, StaveNote, Formatter } from "vexflow";

const NOTES = [
	{ note: "C4", key: "A" },
	{ note: "C#4", key: "W" },
	{ note: "D4", key: "S" },
	{ note: "D#4", key: "E" },
	{ note: "E4", key: "D" },
	{ note: "F4", key: "F" },
	{ note: "F#4", key: "T" },
	{ note: "G4", key: "G" },
	{ note: "G#4", key: "Y" },
	{ note: "A4", key: "H" },
	{ note: "A#4", key: "U" },
	{ note: "B4", key: "J" },
	{ note: "C5", key: "K" },
	{ note: "C#5", key: "O" },
	{ note: "D5", key: "L" },
	{ note: "D#5", key: "P" },
	{ note: "E5", key: ";" },
];

const Piano = () => {
	const [currentNote, setCurrentNote] = useState(null);

	useEffect(() => {
		if (currentNote) {
			renderNote();
		}
	}, [currentNote]);

	const playNote = (note) => {
		const synth = new Tone.Synth().toDestination();
		synth.triggerAttackRelease(note, "8n");
		setCurrentNote(note);
	};

	const renderNote = () => {
		const vf = new Renderer(document.getElementById("vf"), Renderer.Backends.SVG);
		const context = vf.getContext();
		context.clear();
		const stave = new Stave(10, 40, 500);
		stave.addClef("treble").setContext(context).draw();

		if (currentNote) {
			const staveNote = new StaveNote({
				clef: "treble",
				keys: [`${currentNote.toLowerCase()}/4`],
				duration: "q",
			});

			Formatter.FormatAndDraw(context, stave, [staveNote]);
		}
	};

	return (
		<div className="piano-container">
			<div id="vf" className="vf-container"></div>
			<div className="piano">
				{NOTES.map((n, index) => (
					<div
						key={index}
						className={`key ${n.note.includes("#") ? "black" : "white"}`}
						onClick={() => playNote(n.note)}>
						{n.key}
					</div>
				))}
			</div>
		</div>
	);
};

export default Piano;
