import AboutMeHero from "./Heroes/AboutMeHero";
import CVHero from "./Heroes/CVHero";
import CertificatesHero from "./Heroes/CertificatesHero";
import ContactHero from "./Heroes/ContactHero";
import ProjectsHero from "./Heroes/ProjectsHero";
import SkillsHero from "./Heroes/SkillsHero";
import TestimoniesHero from "./Heroes/TestimoniesHero";
import './styles/HeroesSection.css'

const HeroesSection = () => {
	return (
		<section className="heroes section">
			<div className="heroes container">
				<div className="hero__div first">
					<ContactHero />
				</div>
				<div className="hero__div second">
					<AboutMeHero />
					<TestimoniesHero />
					<ProjectsHero />
				</div>
				<div className="hero__div third">
					<CVHero />
					<CertificatesHero />
					<SkillsHero />
				</div>
			</div>
		</section>
	)
};

export default HeroesSection;
