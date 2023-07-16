import { useState } from "react"
const CVHero = () => {
    const [showText, setShowText] = useState(false)
    return (
        <div className="hero cv">
            <div className="hero__content" 
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
        >
                <div className="hero__top invisible">
                    <h4 className="hero__text left">Mi currículum</h4>
                </div>
                <div className="hero__bottom">
                    <div></div>
                    <i className="hero__text right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" /></svg>
                    </i>
                </div>
                <div className="hero__center">
                    <h1 className={`hero__center-text faster ${showText ? 'show' : ''}`}>Mi currículum.</h1>
                    <h1 className={`hero__center-text faster ${showText ? 'show' : ''}`}>Mi currículum.</h1>
                </div>
            </div>
        </div>
    )
}

export default CVHero