import { useState } from "react"

const ContactHero = () => {

    const [showText, setShowText] = useState(false)

    return (
        <div
            className="hero contact"
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)} >
            <div className="hero__content">
                <div className="hero__top invisible">Contácteme</div>
                <div className="hero__bottom">
                    <div></div>
                    <i className="hero__text right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" /></svg>
                    </i>
                </div>
                <div className="hero__center">
                    <h1 className={`hero__center-text ${showText ? 'show' : ''}`}>Pongámonos en contacto.</h1>
                    <h1 className={`hero__center-text ${showText ? 'show' : ''}`}>Pongámonos en contacto.</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactHero