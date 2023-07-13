import AboutMeHero from "./Heroes/AboutMeHero";
import CVHero from "./Heroes/CVHero";
import CertificatesHero from "./Heroes/CertificatesHero";
import ContactHero from "./Heroes/ContactHero";
import EducationHero from "./Heroes/EducationHero";
import ProjectsHero from "./Heroes/ProjectsHero";
import SkillsHero from "./Heroes/SkillsHero";
import TestimoniesHero from "./Heroes/TestimoniesHero";

const HeroesSection = () => {
	return (
		<main className="heroes section">
			<div className="heroes my-container">
				<div className="card__my-container">
					<ProjectsHero />
				</div>
				<div className="card__my-container">
					<AboutMeHero />
					<ContactHero />
					<TestimoniesHero />
				</div>
				<div className="card__my-container">
					<SkillsHero />
				</div>
				<div className="card__my-container">
					<EducationHero />
					<CVHero />
					<CertificatesHero />
				</div>
			</div>
		</main>
	)
};

export default HeroesSection;
