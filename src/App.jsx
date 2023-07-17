import './App.css'
import HeaderSection from './components/HeaderSection'
import HeroesSection from './components/HeroesSection'
import AboutmePart from './components/Parts/AboutmePart'
import ProjectsPart from './components/Parts/ProjectsPart'
import Testimonies from './components/Parts/Testimonies'

function App() {
	return (
		<div className="app">
			<HeaderSection />
			<HeroesSection />
			{/* Parts */}
			<ProjectsPart />
			<AboutmePart />
			<Testimonies />
		</div>
	)
}

export default App
