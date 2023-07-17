import { useState } from 'react';
import '../styles/Parts/ContactMePart.css'

const ContactMePart = () => {
	const [expandFirst, setExpandFirst] = useState(false);
	const [expandSecond, setExpandSecond] = useState(false);
	const [expandThird, setExpandThird] = useState(false);
	const [expandFourth, setExpandFourth] = useState(false);

	return (
		<div className="part contactme" id="contactMe">
			<div className="part__container contactme">
				<header className="part__header">
					<h1 className="part__title">Contácteme</h1>
				</header>
				<ul className="socials">
					<li className="social">
						<a
							onMouseOver={() => setExpandFirst(true)} 
							onMouseOut={() => setExpandFirst(false)}
							href="https://www.linkedin.com/in/federico-coletto-3761a6264"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn_link"
							className='contact__a'>
							LinkedIn
							<i className={`fa-brands fa-linkedin ${expandFirst ? 'show' : ''}`}></i>
						</a>
					</li>
					<li className="social">
						<a
							onMouseOver={() => setExpandSecond(true)} 
							onMouseOut={() => setExpandSecond(false)}
							href="https://api.whatsapp.com/send?phone=542612639374"
							target="_blank"
							rel="noopener noreferrer"
							title="WhatsApp_link"
							className='contact__a'>
							WhatsApp
							<i className={`fa-brands fa-whatsapp ${expandSecond ? 'show' : ''}`}></i>
						</a>
					</li>
					<li className="social">
						<a
							onMouseOver={() => setExpandThird(true)} 
							onMouseOut={() => setExpandThird(false)}
							href="mailto:federico.coletto@fce.uncu.edu.ar"
							target="_blank"
							rel="noopener noreferrer"
							title="gmail_link"
							className='contact__a'>
							Gmail
							<i className={`fa-solid fa-envelope ${expandThird ? 'show' : ''}`}></i>
						</a>
					</li>
					<li className="social">
						<a
							onMouseOver={() => setExpandFourth(true)} 
							onMouseOut={() => setExpandFourth(false)}
							href="https://github.com/federicocoletto"
							target="_blank"
							rel="noopener noreferrer"
							title="github_link"
							className='contact__a'>
							GitHub
							<i className={`fa-brands fa-github ${expandFourth ? 'show' : ''}`}></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default ContactMePart;
