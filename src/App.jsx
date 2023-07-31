import './App.css'
import HeaderSection from './components/Sections/HeaderSection'
import HeroesSection from './components/Sections/HeroesSection'
import AboutmePart from './components/Parts/AboutmePart'
import CertificatesPart from './components/Parts/CertificatesPart'
import ProjectsPart from './components/Parts/ProjectsPart'
import TestimoniesPart from './components/Parts/TestimoniesPart'
import DarkMode from './components/Sections/DarkMode'
import { useState } from "react";

function App() {
	const [darkmodeState, setDarkmodeState] = useState(true);

	return (
		<div className={`app__container ${darkmodeState ? '' : 'light'}`}>
			<div className="app">
				<DarkMode darkmodeState={darkmodeState} setDarkmodeState={setDarkmodeState} />
				<HeaderSection darkmodeState={darkmodeState} />
				<HeroesSection darkmodeState={darkmodeState} />
				{/* Parts */}
				<ProjectsPart darkmodeState={darkmodeState} />
				<AboutmePart darkmodeState={darkmodeState} />
				<CertificatesPart darkmodeState={darkmodeState} />
				<TestimoniesPart darkmodeState={darkmodeState} />
			</div>
		</div>
	)
}

export default App
