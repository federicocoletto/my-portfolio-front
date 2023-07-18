import { useState } from "react"
const CVHero = () => {
    const [showText, setShowText] = useState(false)
    return (
        <div className="hero cv">
            <div className="hero__content"
                onMouseOver={() => setShowText(true)}
                onMouseOut={() => setShowText(false)}
            >
                <div className="hero__top">
                    <h4 className="hero__text left">CV</h4>
                </div>
                <div className="hero__bottom">
                    <i className={`hero__text right ${showText ? 'fa-solid fa-folder-open fa-beat' : 'fa-solid fa-folder'}`}>
                        <a title="FedericoColettoCV.pdf" href="/CV-fedecoletto.pdf" download={'CV-fedecoletto.pdf'}></a>
                    </i>
                </div>
                <div className="hero__center">
                    <p className={`download__span ${showText ? 'show' : ''}`}>Descargar PDF</p>
				</div>
            </div>
        </div>
    )
}

export default CVHero