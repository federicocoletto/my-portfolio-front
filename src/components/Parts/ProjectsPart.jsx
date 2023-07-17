import { useState } from "react";
import '../styles/Parts/ProjectsPart.css'
const ProjectsPart = () => {
	const [showImg, setShowImg] = useState(false)
	const [projectPosition, setProjectPosition] = useState(0)

	const projects = [
		{
			id: 1,
			image: '/public/images/eCommerce-js.png',
			netlify: 'https://playful-frangipane-713d64.netlify.app/',
			github: 'https://github.com/federicocoletto/eCommerce.git',
			pname: 'eCommerce',
			description: 'El primer proyecto que consistió en diseñar toda una página web. En este proyecto plasmé lo que aprendí durante el curso de Fundamentos de Desarrollo Web.',
		},
		{
			id: 2,
			image: '/images/fortune-cookies.png',
			netlify: 'https://glowing-arithmetic-3a492b.netlify.app/',
			github: 'https://github.com/federicocoletto/fortune-cookies.git',
			pname: 'Fortune Cookes',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat harum et recusandae eum, modi error reprehenderit necessitatibus eos veniam iste voluptates voluptatibus quo molestiae dicta tempore corporis eveniet vero? Perferendis, aliquam eaque vel adipisci culpa consequatur. Voluptatibus voluptates, repellat quisquam tenetur atque id, unde, suscipit fugit eos debitis vel corporis. Possimus debitis commodi iure reprehenderit magni repudiandae aut inventore!',
		},
		{
			id: 3,
			image: '/images/users-api.png',
			netlify: 'https://superlative-queijadas-800c66.netlify.app/',
			github: 'https://github.com/federicocoletto/users-api.git',
			pname: 'Users API',
			description: 'https://superlative-queijadas-800c66.netlify.app/',
		},
		{
			id: 4,
			image: '/images/rickandmorty.png',
			netlify: 'https://bright-bubblegum-0e3fd6.netlify.app/',
			github: 'https://github.com/federicocoletto/rickandmorty-app.git',
			pname: 'Rick and Morty APP',
			description: 'Lorem*5',
		},
		{
			id: 5,
			image: '/images/wheather-app.png',
			netlify: 'https://elegant-quokka-534994.netlify.app/',
			github: 'https://github.com/federicocoletto/weather-app.git',
			pname: 'Weather APP',
			description: 'https://playful-frangipane-713d64.netlify.app/',
		},
		{
			id: 6,
			image: '/images/pokedex.png',
			netlify: 'https://jovial-frangipane-656146.netlify.app/#/pokedex',
			github: 'https://github.com/federicocoletto/pokedex.git',
			pname: 'Pokedex',
			description: 'https://playful-frangipane-713d64.netlify.app/',
		},
		{
			id: 7,
			image: '/images/ecommerce-react.png',
			netlify: 'https://reliable-sunshine-0a0894.netlify.app/',
			github: 'https://github.com/federicocoletto/eCommerce.git',
			pname: '',
			description: 'https://playful-frangipane-713d64.netlify.app/',
		},
	]

	const handleNext = () => {
		if (projectPosition <= (projects.length - 1)) {
			setProjectPosition(projectPosition + 1)
		}
	}
	const handlePrev = () => {
		if (projectPosition >= 1) {
			setProjectPosition(projectPosition - 1)
		}
	}
	return (
		<section id="projects" className="part">
			<div className="part__container projects">
				<header className="part__header">
					<h2 className="part__title">Mis proyectos</h2>
					<h3 className="part__subtitle">Descubra los trabajos que me han enseñado lo que sé hasta ahora.</h3>
				</header>
				<div className="carousel">
					<div className="carousel__items" style={{ transform: `translateX(calc(-${projectPosition}00% / 7))` }}>
						{
							projects.map(project => (
								<div className="carousel__item" key={project.id}>
									<div className="carousel__item-images">
										<img className="item__image" src={project.image} alt="project-img" onMouseOver={() => setShowImg(!showImg)} />
										<a
											className={`carousel__image-hover ${showImg ? 'show' : ''}`}
											onMouseOut={() => setShowImg(false)}
											href={project.netlify} target="_blank" rel="noopener noreferrer" title="eCommerce-JS"
										>
											<img src={project.image} alt="" className="item__image-hover" />
										</a>
									</div>
									<div className="carousel__item-info">
										<h4 className="item__title">{project.pname}</h4>
										<p className="item__description part__text">{project.description}</p>
									</div>
								</div>
							))
						}
					</div>
					<footer className="carousel__footer">
						<div className="carousel__button">
							<button className={`button previous ${projectPosition === 0 && 'hide'}`}  onClick={handlePrev}>prev</button>
						</div>
						<div className={`carousel__dot ${projectPosition === 0 ? 'active' : ''}`} onClick={() => setProjectPosition(0)}></div>
						<div className={`carousel__dot ${projectPosition === 1 ? 'active' : ''}`} onClick={() => setProjectPosition(1)}></div>
						<div className={`carousel__dot ${projectPosition === 2 ? 'active' : ''}`} onClick={() => setProjectPosition(2)}></div>
						<div className={`carousel__dot ${projectPosition === 3 ? 'active' : ''}`} onClick={() => setProjectPosition(3)}></div>
						<div className={`carousel__dot ${projectPosition === 4 ? 'active' : ''}`} onClick={() => setProjectPosition(4)}></div>
						<div className={`carousel__dot ${projectPosition === 5 ? 'active' : ''}`} onClick={() => setProjectPosition(5)}></div>
						<div className={`carousel__dot ${projectPosition === 6 ? 'active' : ''}`} onClick={() => setProjectPosition(6)}></div>
						<div className="carousel__button">
							<button className={`button next ${projectPosition === 6 && 'hide'}`}  onClick={handleNext}>next</button>
						</div>
					</footer>
				</div>
			</div>
		</section>
	)
};

export default ProjectsPart;
