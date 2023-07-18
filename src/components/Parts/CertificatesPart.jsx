import '../styles/Parts/CertificatesPart.css'
import { useState } from "react";

const CertificatesPart = () => {
	const [showInfo1, setShowInfo1] = useState(false);
	const [showInfo2, setShowInfo2] = useState(false);
	const [showInfo3, setShowInfo3] = useState(false);
	return (
		<div id="certificates" className="part certificates">
			<div className="part__container certificates">
				<header className="part__header">
					<h1 className="part__title">Mis certificados</h1>
				</header>
				<div className="part__body certificates__container">
					<div className='certificate'
						onMouseOver={() => setShowInfo1(true)} 
						onMouseOut={() => setShowInfo1(false)}
						>
						<h2 className="certificate__title">Fundamentos de desarrollo web</h2>
						<div className="certificate__image">
							<img src="" alt="" />
						</div>
						<ul className={`certificate__info ${showInfo1 ? 'show' : ''}`}>
							<li className="certificate__year"><span>Año: </span>2023</li>
							<li className="certificate__institution"><span>Institución: </span>Academlo</li>
							<li className="certificate__grade"><span>Nota: </span>5</li>
						</ul>
					</div>
					<div className='certificate'
						onMouseOver={() => setShowInfo2(true)} 
						onMouseOut={() => setShowInfo2(false)}
						>
						<h2 className="certificate__title">Desarrollo web con react</h2>
						<div className="certificate__image">
							<img src="" alt="" />
						</div>
						<ul className={`certificate__info ${showInfo2 ? 'show' : ''}`}>
							<li className="certificate__year"><span>Año: </span>2023</li>
							<li className="certificate__institution"><span>Institución: </span>Academlo</li>
							<li className="certificate__grade"><span>Nota: </span>9</li>
						</ul>
					</div>
					<div className="certificate"
						onMouseOver={() => setShowInfo3(true)} 
						onMouseOut={() => setShowInfo3(false)}
						>
						<h2 className="certificate__title">Back End</h2>
						<div className="certificate__image">
							<img src="" alt="" />
						</div>
						<ul className={`certificate__info ${showInfo3 ? 'show' : ''}`}>
							<li className="certificate__year"><span>Año: </span>2023</li>
							<li className="certificate__institution"><span>Institución: </span>Academlo</li>
							<li className="certificate__grade"><span>Nota: </span>9</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

export default CertificatesPart;
