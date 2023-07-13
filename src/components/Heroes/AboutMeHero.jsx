import { useState } from "react"

const AboutMeHero = () => {
    const [showText, setShowText] = useState(false)
    const handleClickScroll = () => {
        document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="hero__card aboutme"
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
            onClick={handleClickScroll}>
            <div className="card__content">
                <div className="card__content-details">
                    <h1 className="card__content-details-h1 top left">Conózcame</h1>
                    <i className="card__content-details-i bottom right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                    </i>
                </div>
                <div className="card__content-text">
                    <h1 className={`card__content-text-h1 faster ${showText ? 'show' : ''}`}>Sepa un poco más sobre mi.</h1>
                    <h1 className={`card__content-text-h1 faster ${showText ? 'show' : ''}`}>Sepa un poco más sobre mi.</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutMeHero