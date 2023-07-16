import './App.css'
import HeaderSection from './components/HeaderSection'
import AboutmePart from './components/Heroes/Parts/AboutmePart'
import ProjectsPart from './components/Heroes/Parts/ProjectsPart'
import HeroesSection from './components/HeroesSection'

function App() {
	return (
		<div className="app">
			<HeaderSection />
			<HeroesSection />
			{/* Parts */}
			<ProjectsPart />
			{/* <AboutmePart /> */}
		</div>
	)
}

export default App
