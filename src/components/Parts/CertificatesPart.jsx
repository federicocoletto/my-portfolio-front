import '../styles/Parts/CertificatesPart.css'
import { useEffect, useState } from "react";

const CertificatesPart = () => {

	const certificates = [
		{
			id: 1,
			title: 'Primeros Pasos del Desarrollo Frontend',
			image: '/certificates-imges/ticmas1.png',
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
			image: '/certificates-imges/fundamentos-de-desarrollo-web.png',
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
			image: '/certificates-imges/apps-react.png',
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

	const [shownCertificate, setShownCertificate] = useState(null);

	const handleShowClick = (e) => {
		e.stopPropagation()
		const certifId = +e.target.className.split(' ')[4]
		setShownCertificate(certifId)
		if (shownCertificate !== certifId) {
			setShownCertificate(certifId)
		} else {
			setShownCertificate(null)
		}
	}


	useEffect(() => {
		console.log(shownCertificate)
	}, [shownCertificate]);

	return (
		<div id="certificates" className="part certificates"
			onClick={() => setShownCertificate(null)}
		>
			<div className="part__container certificates">
				<header className="part__header">
					<h1 className="part__title">Mis certificados</h1>
				</header>
				<div className="part__body">
					{
						certificates.map(certif => (
							<div className={`certificates__container ${shownCertificate ? 'active' : ''}`} key={certif.id}>
								<div className="certificate__header">
									<h2 className="certificate__title">{certif.title}</h2>
									<i className={`show-skills__button fa-solid fa-circle-down sm ${certif.id} ${shownCertificate === certif.id && 'hide'}`} onClick={handleShowClick}></i>
								</div>
								{
									shownCertificate === certif.id && (
										<div className='certificate__details'>
											<div className="certificate__image">
												<img src={certif.image} alt={certif.title} />
											</div>
											<ul className='certificate__info-ul'>
												<li className="certificate__info-li sm"><span className='sm'>Año </span>{certif.issue_date}</li>
												<li className="certificate__info-li sm"><span className='sm'>Institución </span>{certif.institution}</li>
												<li className="certificate__info-li sm"><span className='sm'>Nota </span>{certif.grade}</li>
											</ul>
											<ul className="skills__learned-ul">
												<h2 className="skills__learned-h2 sm">Lenguajes, librerías y frameworks aprendidos</h2>
												{
													certif.skills_learned.map((sk, i) => (
														<li key={i} className={`skills__learned-li sm`}>{sk}</li>
													))
												}
											</ul>
										</div>
									)
								}
							</div>
						))
					}
				</div>
			</div>
		</div >
	)
};

export default CertificatesPart;
