import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Navigate({ show, handelClose, buttons: {
    info, links, skills, projects, education, experience
} }) {

    const height = window.innerHeight * 0.9;
    const width = window.innerWidth / 4;

    const x = 0
    const y = window.innerHeight / 2 - height / 2

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
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Navigate" x={x} y={y} width={width} height={height} resizeable>

                    <p style={{
                        border: '2px solid #222',
                        padding: '1em',
                        boxShadow: '1em 1em #000',
                        marginRight: '1em'
                    }}>Click a link to open a window</p>


                    <div className="list">
                        <ul>
                            <li onClick={info} className="page-button">Who am I ?</li>
                            <li onClick={links} className="page-button">Links/Contacts</li>
                            <li onClick={skills} className="page-button">Skills</li>
                            <li onClick={projects} className="page-button">Projects</li>
                            <li onClick={education} className="page-button">Education</li>
                        </ul>
                    </div>
                </Win>
            )
            }
        </Transition >
    )
}
