import { useState } from "react"

const ContactHero = () => {

    const [expandFirst, setExpandFirst] = useState(false);
    const [expandSecond, setExpandSecond] = useState(false);
    const [expandThird, setExpandThird] = useState(false);
    const [expandFourth, setExpandFourth] = useState(false);
    const [showText, setShowText] = useState(false)
    const handleScroll = () => {
        document.getElementById('contactMe').scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div
            className="hero contact"
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}
            onClick={handleScroll} >
            <div className="hero__content">
                <div className="hero__top">Contácteme</div>
                <div className="hero__bottom">
                    <div></div>
                    <i className="hero__text right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" /></svg>
                    </i>
                </div>
                <div className="hero__center-contactme">
                    <ul className={`socials ${showText ? 'show' : ''}`}>
                        <li className="social">
                            <a
                                onMouseOver={() => setExpandFirst(true)}
                                onMouseOut={() => setExpandFirst(false)}
                                href="https://www.linkedin.com/in/federico-coletto-3761a6264"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn_link"
                                className='contact__a'>
                                <span className="social__span">LinkedIn</span>
                                <i className={`fa-brands fa-linkedin ${expandFirst ? 'show' : ''}`}></i>
                            </a>
                        </li>
                        <li className="social">
                            <a
                                onMouseOver={() => setExpandSecond(true)}
                                onMouseOut={() => setExpandSecond(false)}
                                href="https://api.whatsapp.com/send?phone=542612639374"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp_link"
                                className='contact__a'>
                                <span className="social__span">WhatsApp</span>
                                <i className={`fa-brands fa-whatsapp ${expandSecond ? 'show' : ''}`}></i>
                            </a>
                        </li>
                        <li className="social">
                            <a
                                onMouseOver={() => setExpandThird(true)}
                                onMouseOut={() => setExpandThird(false)}
                                href="mailto:federico.coletto@fce.uncu.edu.ar"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="gmail_link"
                                className='contact__a'>
                                <span className="social__span">Gmail</span>
                                <i className={`fa-solid fa-envelope ${expandThird ? 'show' : ''}`}></i>
                            </a>
                        </li>
                        <li className="social">
                            <a
                                onMouseOver={() => setExpandFourth(true)}
                                onMouseOut={() => setExpandFourth(false)}
                                href="https://github.com/federicocoletto"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="github_link"
                                className='contact__a'>
                                <span className="social__span">GitHub</span>
                                <i className={`fa-brands fa-github ${expandFourth ? 'show' : ''}`}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactHero
