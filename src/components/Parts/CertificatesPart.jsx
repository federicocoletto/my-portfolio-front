import '../styles/Parts/CertificatesPart.css'
import { useState } from "react";

const CertificatesPart = () => {
	const [showCertificate, setShowCertificate] = useState(false);
	const [showSkills, setShowSkills] = useState(false);
	const handleShowSkills = (e) => {
		e.stopPropagation()
		setShowSkills(!showSkills)
	}

	const certificates = [
		{
			id: 1,
			title: 'Primeros Pasos del Desarrollo Frontend',
			image: '/public/certificates-imges/ticmas1.png',
			issue_date: '27.02.2023',
			institution: 'Ticmas',
			certificate_id: '18aa8ad6-940b-428e-8fe1-dbbcaacb37ae',
			url: 'https://api.profesional.ticmas.io/v1/certificates-download/c660cc48-cacd-441c-852c-674cb891089a---pdf',
			grade: 9,
			skills_learned: [
				'JavaScript',
				'HyperText Markup Language',
				'Cascading Style Sheets'
			]
		},
		{
			id: 2,
			title: 'Fundamentos de Desarrollo Web',
			image: '/public/certificates-imges/fundamentos-de-desarrollo-web.png',
			issue_date: '14.04.2023',
			institution: 'Academlo',
			certificate_id: '18366315288126',
			url: 'https://www.academlo.com/',
			grade: 5,
			skills_learned: [
				'Web Development',
				'Web Design',
				'JavaScript',
				'HyperText Markup Language',
				'Cascading Style Sheets'
			]
		},
		{
			id: 3,
			title: 'Desarrollo de Aplicaciones Web con React',
			image: '/public/certificates-imges/apps-react.png',
			issue_date: '14.04.2023',
			institution: 'Academlo',
			certificate_id: '48572812898340',
			url: 'https://www.academlo.com/',
			grade: 9,
			skills_learned: [
				'React.js',
				'React Jsx',
				'Object-Oriented JavaScript',
				'JavaScript Frameworks',
				'JavaScript',
				'Full Stack Software Engineering',
				'Front End Design'
			]
		},
	]

	console.log(showSkills)

	return (
		<div id="certificates" className="part certificates" onClick={() => setShowSkills(false)}>
			<div className="part__container certificates">
				<header className="part__header">
					<h1 className="part__title">Mis certificados</h1>
				</header>
				<div className="part__body certificates__container">
					{
						certificates.map(certif => (
							<div className='certificate' key={certif.id} onClick={() => setShowCertificate(true)}>
								<h2 className="certificate__title">{certif.title}</h2>
								<div className="certificate__image">
									<img src={certif.image} alt={certif.title} />
								</div>
								<ul className='certificate__info'>
									<li className="certificate__year"><span>Año: </span>{certif.issue_date}</li>
									<li className="certificate__institution"><span>Institución: </span>{certif.institution}</li>
									<li className="certificate__grade"><span>Nota: </span>{certif.grade}</li>
								</ul>
								<i className="show-skills__button fa-solid fa-circle-down" onClick={handleShowSkills}></i>
								<ul className="certificate__skills">
								{ showSkills
									?
									certif.skills_learned.map((sk, i) => (
										<li key={i} className={`certificate__skill ${showSkills ? 'active' : ''}`}>{sk}</li>
									))
									: ''
								}
								</ul>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
};

export default CertificatesPart;
