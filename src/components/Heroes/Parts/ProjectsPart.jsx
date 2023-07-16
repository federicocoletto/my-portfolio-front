import { useState } from "react";
// import './styles/ProjectsSection.css'
const ProjectsPart = () => {
	const [showImg, setShowImg] = useState(false)
	const [projectPosition, setProjectPosition] = useState(0)

	const projects = [
		{
			id: 1,
			image: '/images/eCommerce-js.png',
			netlify: 'https://playful-frangipane-713d64.netlify.app/',
			github: 'https://github.com/federicocoletto/eCommerce.git',
			pname: 'eCommerce',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat harum et recusandae eum, modi error reprehenderit necessitatibus eos veniam iste voluptates voluptatibus quo molestiae dicta tempore corporis eveniet vero? Perferendis, aliquam eaque vel adipisci culpa consequatur. Voluptatibus voluptates, repellat quisquam tenetur atque id, unde, suscipit fugit eos debitis vel corporis. Possimus debitis commodi iure reprehenderit magni repudiandae aut inventore!',
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
			<div className="part__container">
				<header className="part__container-header">
					<h2 className="part__title">Mis proyectos</h2>
					<h4 className="part__subtitle">Descubra los trabajos que me han enseñado lo que sé hasta ahora.</h4>
				</header>
				<div className="part__container-body carousel">
					{/* <div className="carousel__items" style={{ transform: `translateX(calc(-${projectPosition}00% / 7))` }}>
						{
							projects.map(project => (
								<div className="carousel__item" key={project.id}>
									<div className="carousel__item-images">
										<img className='carousel__img' src={project.image} alt="project-img" onMouseOver={() => setShowImg(!showImg)} />
										<div className={`hover-img__my-container ${showImg ? 'show' : ''}`} onMouseOut={() => setShowImg(false)} >
											<a href={project.netlify} target="_blank" rel="noreferrer" title="eCommerce-JS">
												<img className="carousel__img-hover" src={project.image} alt="" />
											</a>
										</div>
									</div>
									<div className="carousel__item-buttons">
										<a className="carousel__a" href={project.netlify} target="_blank" rel="noreferrer" title={project.pname}><button>Netlify</button></a>
										<a className="carousel__a" href={project.github} target="_blank" rel="noreferrer" title={project.pname}><button>GitHub</button></a>
									</div>
									<footer className="carousel__item-info">
										<h1 className="item-info__h1">{project.pname}</h1>
										<p className="item-info__text">{project.description}</p>
									</footer>
								</div>
							))
						}
					</div> */}
					{/* <footer className="carousel__buttons">
						{projectPosition !== 0 && (<button className="carousel__btn prev" onClick={handlePrev}>prev</button>)}
						{projectPosition !== (projects.length - 1) && (<button className="carousel__btn next" onClick={handleNext}>next</button>)}
					</footer> */}
				</div>
			</div>
		</section>
	)
};

export default ProjectsPart;
