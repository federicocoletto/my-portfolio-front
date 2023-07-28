/* eslint-disable react/prop-types */
import { useState } from "react"

const ProjectsHero = ({darkmodeState}) => {
	const [showText, setShowText] = useState(false)

	const handleClickScroll = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className={`hero projects ${darkmodeState ? '' : 'light'}`}
			onMouseOver={() => setShowText(true)}
			onMouseOut={() => setShowText(false)}
			onClick={handleClickScroll}>
			<div className="hero__content">
				<div className="hero__top">
					<h4 className="hero__text left">Mis proyectos</h4>
				</div>
				<div className="hero__bottom">
					<i className="hero__text right">
						<svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
					</i>
				</div>

				<div className="hero__center">
					<h1
						className={`hero__center-text ${showText ? 'show' : ''}`}
					> Vea los proyectos más desafiantes hasta ahora.</h1>
					<h1
						className={`hero__center-text ${showText ? 'show' : ''}`}
					> Vea los proyectos más desafiantes hasta ahora.</h1>
				</div>
			</div>
		</div >
	)
}

export default ProjectsHero