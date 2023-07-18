import './styles/HeaderSection.css'

const HeaderSection = () => {
	return (
		<header className="app__header section">
			<div className="header__name">
				<p>FEDERICO</p>
			</div>
			<div className="header__lastname">
				<p>COLETTO</p>
			</div>
			<div className="header__intro">
				{/* <p>Hola, soy un programador junior</p> */}
			</div>
		</header>
	)
};

export default HeaderSection;
