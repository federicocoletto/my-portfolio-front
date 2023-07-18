import { useState } from "react"

const SkillsHero = () => {
    const [showText, setShowText] = useState(false)
    const mySkills = [
        {
            name: 'HTML',
            logo: '/public/images/skills-logos/html.png',
        },
        {
            name: 'CSS',
            logo: '/public/images/skills-logos/css.png',
        },
        {
            name: 'JS',
            logo: '/public/images/skills-logos/js.png',
        },
        {
            name: 'React',
            logo: '/public/images/skills-logos/reactjs.png',
        },
        {
            name: 'NodeJS',
            logo: '/public/images/skills-logos/nodejs.png',
        },
        {
            name: 'Bootstrap',
            logo: '/public/images/skills-logos/bootstrap.png',
        },
    ]

    return (
        <div
            className="hero skills"
            onMouseOver={() => setShowText(true)}
            onMouseOut={() => setShowText(false)}>
            <div className="hero__content larger">
                <div className="hero__top">
                    <h4 className="hero__text left">Habilidades IT</h4>
                </div>
                <div className="hero__bottom">
                    <div></div>
                    <i className="hero__text right">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z" /></svg>
                    </i>
                </div>
                <div className="hero__center skills">
                    <div className={`hero__center-text skills ${showText ? 'show' : ''}`}>
                        {
                            mySkills.map((sk, i) => (
                                <div className="skill" key={i}>
                                    <div className="skill__logo">
                                        <img src={sk.logo} alt={sk.logo} className="skill__img" />
                                    </div>
                                    <div className="skill__name">
                                        <p className="skill__p">{sk.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`hero__center-text skills ${showText ? 'show' : ''}`}>
                        {
                            mySkills.map((sk, i) => (
                                <div className="skill" key={i}>
                                    <div className="skill__logo">
                                        <img src={sk.logo} alt={sk.logo} className="skill__img" />
                                    </div>
                                    <div className="skill__name">
                                        <p className="skill__p">{sk.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SkillsHero

/*
<p className="hero__content-details-p bottom left larger"></p>
*/