/* eslint-disable react/prop-types */
import AboutMeHero from "../Heroes/AboutMeHero";
import CVHero from "../Heroes/CVHero";
import CertificatesHero from "../Heroes/CertificatesHero";
import ContactHero from "../Heroes/ContactHero";
import ProjectsHero from "../Heroes/ProjectsHero";
import SkillsHero from "../Heroes/SkillsHero";
import TestimoniesHero from "../Heroes/TestimoniesHero";
import '../styles/HeroesSection.css'

const HeroesSection = ({darkmodeState}) => {
	return (
		<section className="heroes section">
			<div className="heroes container">
				<div className="hero__div first">
					<ContactHero darkmodeState={darkmodeState} />
				</div>
				<div className="hero__div second">
					<AboutMeHero darkmodeState={darkmodeState} />
					<TestimoniesHero darkmodeState={darkmodeState} />
					<ProjectsHero darkmodeState={darkmodeState} />
				</div>
				<div className="hero__div third">
					<CertificatesHero darkmodeState={darkmodeState} />
					<SkillsHero darkmodeState={darkmodeState} />
					<CVHero darkmodeState={darkmodeState} />
				</div>
			</div>
		</section>
	)
};

export default HeroesSection;
