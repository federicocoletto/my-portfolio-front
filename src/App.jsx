import './App.css'
import HeaderSection from './components/HeaderSection'
import HeroesSection from './components/HeroesSection'
import AboutmePart from './components/Parts/AboutmePart'
import ContactMePart from './components/Parts/ContactMePart'
import ProjectsPart from './components/Parts/ProjectsPart'
import TestimoniesPart from './components/Parts/TestimoniesPart'

function App() {
	return (
		<div className="app">
			<HeaderSection />
			<HeroesSection />
			{/* Parts */}
			<ProjectsPart />
			<AboutmePart />
			<TestimoniesPart />
			<ContactMePart />
		</div>
	)
}

export default App
