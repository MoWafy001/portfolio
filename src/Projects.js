import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Projects({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.9;
    const width = height * 1.5;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const projects = [
        { tag: 'NodeJS | SocketIO', title: 'The Royal Game of Ur', img: 'rg.png', link: 'https://github.com/MoWafy001/the-royal-game-of-ur', },
        { tag: 'NodeJS | SocketIO', title: 'Temp Group Chat', img: null, link: 'https://github.com/MoWafy001/temp-group-chat', },
        { tag: 'React', title: 'My Reads', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjames-priest.github.io%2Freactnd-project-myreads%2Fassets%2Fimages%2Fp1-small.jpg&f=1&nofb=1', link: 'https://github.com/MoWafy001/reactnd-project-myreads-starter', },
        { tag: 'Flask', title: 'Heart Diseases Detector', img: null, link: 'https://github.com/MoWafy001/Detection-of-Heart-Diseases', },
        { tag: 'Flask', title: 'DrSmart Backend ', img: null, link: 'https://github.com/DrSmartGDSC/DrSmart-Backend', },
        { tag: 'PHP', title: 'Time Tracker', img: 'tt.webp', link: 'https://github.com/MoWafy001/time-tracker', },
        { tag: 'NodeJS | PeerJS', title: 'Zoom Clone', img: 'wc.webp', link: 'https://github.com/MoWafy001/zoom-clone-2.0', },
        { tag: 'JS', title: 'Pomodoro timer', img: 'pt.png', link: 'https://github.com/MoWafy001/Pomodoro-Timer', },
        { tag: 'JS', title: 'Spelling Practice', img: 'sp.png', link: 'https://github.com/MoWafy001/spelling-practice', },
        { tag: 'NodeJS', title: 'Anonymous Questions', img: null, link: 'https://github.com/MoWafy001/anonymous-questions', },
        { tag: 'Flask', title: 'Coffee Shop', img: null, link: 'https://github.com/MoWafy001/coffee_shop_project', },
        { tag: 'Flask', title: 'Trivia', img: null, link: 'https://github.com/MoWafy001/trivia', },
        { tag: 'Flask', title: 'Fyyur', img: 'fy.png', link: 'https://github.com/MoWafy001/fyyur', },
    ]

    return (
        <Transition
            items={show}
            from={{ opacity: 0, top: y * 4, height: height / 4 }}
            enter={{ opacity: 1, top: y, height }}
            leave={{ opacity: 0, top: y * 4, height: height / 4 }}
            config={{
                duration: 1000,
                easing: easings.easeOutBack,
            }}>

            {(props, s) => (
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Projects" x={x} y={y} width={width} height={height} resizeable>

                    <p style={{
                        border: '2px solid #222',
                        padding: '0.5em 2em',
                        boxShadow: '0.5em 0.5em #000',
                        marginRight: '0.5em'
                    }}>Projects</p>

                    <div className="projects">
                        {projects.map(p => (
                            <a href={p.link} target="_blank" rel="noreferrer" className="cell">
                                {p.img ?
                                    <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                                        <img src={p.img} alt="img" />
                                        <span className='t'>{p.title}</span>
                                        <span className="tag">{p.tag}</span>
                                    </div>
                                    :
                                    <div className="cover">
                                        <span className='t'>{p.title}</span>
                                        <span className="tag">{p.tag}</span>
                                    </div>
                                }
                            </a>
                        ))}
                    </div>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1em'
                    }}>
                        <button onClick={handelBack} className="page-button">Back (Skills)</button>
                        <button onClick={handelNext} className="page-button">Next (Education)</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
