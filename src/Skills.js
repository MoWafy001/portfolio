import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Skills({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.7;
    const width = height * 1.5;

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
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Skills & Tools" x={x} y={y} width={width} height={height} resizeable>

                    <p style={{
                        border: '2px solid #222',
                        padding: '0.5em 2em',
                        boxShadow: '0.5em 0.5em #000',
                        marginRight: '0.5em'
                    }}>Skills</p>

                    <div className="skills">
                        <span className="cell">Data Management</span>
                        <span className="cell">Exploratory Analysis</span>
                        <span className="cell">Statistical Experimentation</span>
                        <span className="cell">Model Development</span>
                        <span className="cell">Coding for Production Environments</span>
                        <span className="cell">Communication and Reporting</span>
                        <span className="cell">Problem solving</span>
                    </div>
                    

                    <p style={{
                        border: '2px solid #222',
                        padding: '0.5em 2em',
                        boxShadow: '0.5em 0.5em #000',
                        marginRight: '0.5em'
                    }}>Tools</p>

                    <div className="skills">
                        <span className="cell">Python</span>
                        <span className="cell">R</span>
                        <span className="cell">Tableau</span>
                        <span className="cell">PowerBI</span>
                        <span className="cell">T_SQL</span>
                        <span className="cell">Excel</span>
                        <span className="cell">SAS</span>
                        <span className="cell">TensorFlow</span>
                        <span className="cell">Sklearn</span>
                        <span className="cell">Plotly</span>
                        <span className="cell">Open CV</span>
                        <span className="cell">Pytorch</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1em'
                    }}>
                        
                        <button onClick={handelBack} className="page-button">Back (Links)</button>
                        <button onClick={handelNext} className="page-button">Next (Projects)</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
