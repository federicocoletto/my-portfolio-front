/* eslint-disable react/prop-types */

const DarkMode = ({ darkmodeState, setDarkmodeState }) => {
	let prevScrollpos = window.scrollY;
	const dmCont = document.querySelector(".darkmode__container");

	window.onscroll = function () {
		const currentScrollPos = window.scrollY;
		if (prevScrollpos > currentScrollPos) {
			dmCont.classList.add('show')
		} else {
			dmCont.classList.remove('show')
		}
		prevScrollpos = currentScrollPos;
	};

	return (
		<div className={`darkmode__container ${darkmodeState ? '' : 'light'}`} onClick={() => setDarkmodeState(!darkmodeState)}>
			<div className="darkmode__buttons">
				<i className={`fa-solid darkmode__button ${darkmodeState ? 'fa-sun' : 'fa-moon'}`}></i>
			</div>
		</div>
	)
};

export default DarkMode;
