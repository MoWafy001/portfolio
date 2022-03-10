import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Info({ show, handelClose, buttons: { handelNext, handelNavigate } }) {

    const height = window.innerHeight * 0.7;
    const width = height * 0.8;

    const x = window.innerWidth / 2 - width / 2
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
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Info" x={x} y={y} width={width} height={height} resizeable>

                    <img className="noselect" draggable={false} style={{
                        border: '2px solid #222',
                        width: 'min(50%, 20rem)',
                        margin: '0 auto',
                        boxShadow: '1em 1em #000',
                        aspectRatio: '1/1',
                    }} src="mePic.png" alt="profile pic" />

                    <p style={{
                        border: '2px solid #222',
                        padding: '1em',
                        boxShadow: '1em 1em #000',
                        marginRight: '1em'
                    }}>Full Stack Web Developer, and a Computer Science student with experience in Frontend Development, Backend Development, and some cloud.</p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1em'
                    }}>
                        <button onClick={handelNavigate} className="page-button">Navigate</button>
                        <button onClick={handelNext} className="page-button">Next (Links)</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
