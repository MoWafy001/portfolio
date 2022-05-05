import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Links({ show, handelClose, buttons: { handelNext, handelBack } }) {

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
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Links" x={x} y={y} width={width} height={height} resizeable>

                    <div className="list">
                        <ul>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmed-haytham/"><li style={{ '--brd': '#1e90ff', '--sdw': '#1e90ff22' }} className="page-button">LinkedIn</li></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/ahpro7/"><li style={{ '--brd': '#333', '--sdw': '#3332' }} className="page-button">Github</li></a>
                            <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/ahmedhaytham"><li style={{ '--brd': '#F4B400', '--sdw': '#F4B40022' }} className="page-button">Kaggle</li></a>
                            <a target="_blank" rel="noreferrer" href="mailto: ahpro001@gmail.com"><li style={{ '--brd': '#C71610', '--sdw': '#C7161022' }} className="page-button">ahpro001@gmail.com</li></a>
                            <a target="_blank" rel="noreferrer" href="tel: +201011616142"><li style={{ '--brd': '#000', '--sdw': '#0002' }} className="page-button">+201011616142</li></a>
                        </ul>
                    </div>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1em'
                    }}>
                        <button onClick={handelBack} className="page-button">Back (Info)</button>
                        <button onClick={handelNext} className="page-button">Next (Skills)</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
