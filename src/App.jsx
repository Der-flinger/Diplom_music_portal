import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/MainPage.jsx";
import Instruments from "./components/InstrumentsPage.jsx";
import KnowledgeBase from "./components/KnowledgeBasePage";
import Feedback from "./components/Feedback.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import SiteMap from "./components/SiteMap.jsx";
import Contacts from "./components/Contacts.jsx";
import Piano from "./components/Piano.jsx";
import NoteTrainer from "./components/NoteTrainer.jsx";

function App() {
	return (
		// <div className="App">
		// 	<KnowledgeBase />
		// 	<Router></Router>
		// </div>
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/Instruments" element={<Instruments />} />
				<Route path="/KnowledgeBase" element={<KnowledgeBase />} />
				<Route path="/Feedback" element={<Feedback />} />
				<Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
				<Route path="/SiteMap" element={<SiteMap />} />
				<Route path="/Contacts" element={<Contacts />} />
				<Route path="/Piano" element={<Piano />} />
				<Route path="/NoteTrainer" element={<NoteTrainer />} />
			</Routes>
		</Router>
	);
}

export default App;
