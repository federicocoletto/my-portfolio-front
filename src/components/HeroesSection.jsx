import AboutMeHero from "./Heroes/AboutMeHero";
import CVHero from "./Heroes/CVHero";
import CertificatesHero from "./Heroes/CertificatesHero";
import ContactHero from "./Heroes/ContactHero";
import EducationHero from "./Heroes/EducationHero";
import ProjectsHero from "./Heroes/ProjectsHero";
import SkillsHero from "./Heroes/SkillsHero";
import TestimoniesHero from "./Heroes/TestimoniesHero";
import './styles/HeroesSection.css'

const HeroesSection = () => {
	return (
		<section className="heroes section">
			<div className="heroes container">
				<div className="hero__div first">
					<ProjectsHero />
				</div>
				<div className="hero__div second">
					<AboutMeHero />
					<ContactHero />
					<TestimoniesHero />
				</div>
				<div className="hero__div third">
					<CVHero />
					<CertificatesHero />
				</div>
				<div className="hero__div fourth">
					<SkillsHero />
					<EducationHero />
				</div>
			</div>
		</section>
	)
};

export default HeroesSection;
