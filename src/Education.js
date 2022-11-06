import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Education({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.9;
    const width = height * 1.5;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const projects = [
        { tag: 'React - Udacity', title: 'React Developement Cross-Skilling Nanodegree', img: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/82033ead-b043-4f86-80d7-6aff80be062a.svg', link: 'https://graduation.udacity.com/confirm/TA9ZX9QD', },
        { tag: 'Flask - API Developement - Udacity', title: 'Advanced Web Development Nanodegree', img: "https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/a810afad-78ca-48b5-aa4c-683a4caea70b.svg", link: 'https://graduation.udacity.com/confirm/PANDNREA', },
        { tag: 'NodeJS - JavaScript - Udacity', title: 'Web Development Professional Nanodegree', img: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/a93eee33-cf66-4953-8fbf-88459b94c17b.svg', link: 'https://graduation.udacity.com/confirm/FFGDWSHT', },
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
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Education" x={x} y={y} width={width} height={height} resizeable>

                    <p style={{
                        border: '2px solid #222',
                        padding: '0.5em 2em',
                        boxShadow: '0.5em 0.5em #000',
                        marginRight: '0.5em'
                    }}>Certs</p>

                    <div className="certs">
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
                        <button onClick={handelBack} className="page-button">Back (Projects)</button>
                        <button onClick={handelNext} className="page-button">Navigate</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
