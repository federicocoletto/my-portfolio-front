/* eslint-disable react/prop-types */

const DarkMode = ({ darkmodeState, setDarkmodeState }) => {

	return (
		<div className="darkmode__container">
			<div className="darkmode__buttons">
				<i className={`fa-solid darkmode__button ${darkmodeState ? 'fa-sun' : 'fa-moon'}`} onClick={() => setDarkmodeState(!darkmodeState)}></i>
			</div>
		</div>
	)
};

export default DarkMode;
