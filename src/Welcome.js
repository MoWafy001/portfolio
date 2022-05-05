import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Welcome({ show, handelClose, buttons: { handelNext } }) {

    const width = window.innerWidth / 4;
    const height = width * 3 / 4

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
                s && <Win handelClose={handelClose} animation_styles={props} title="Welcome Window" x={x} y={y} width={width} height={height} lock resizeable>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                        <span className="page-heading">Welcome to my Protfilo</span>
                        <button onClick={handelNext} className="page-button">start</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
