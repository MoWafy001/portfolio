import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Projects({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.9;
    const width = height * 1.5;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const projects = [
        { tag: 'Python | TensorFlow | Pytorch', title: 'Self driving car in Egypt', img: null, link: 'https://github.com/AhPro7/self-driving-car-in-egypt', },
        { tag: 'Python | Pytorch', title: 'Is This a Car ?', img: 'IsCar.png', link: 'https://github.com/AhPro7/self-driving-car-in-egypt/tree/main/Is%20this%20a%20car%20_', },
        { tag: 'Python | TensorFlow', title: 'Where am I ?', img: 'WHere.png', link: 'https://github.com/MoWafy001/reactnd-project-myreads-starter', },
        { tag: 'Python', title: 'Heart Diseases Detector', img: null, link: 'https://www.kaggle.com/code/ahmedhaytham/heart-disease-eda-93', },
        { tag: 'Python', title: 'HUMAN POSE ESTIMATION', img: 'Human.png', link:null, },
        { tag: 'Python', title: 'Game Sales Analysis', img: 'Game.png', link: 'https://www.kaggle.com/code/ahmedhaytham/game-sales-analysis', },
        { tag: 'Python', title: 'medical-appointment', img: 'med.png', link: 'https://www.kaggle.com/code/ahmedhaytham/medical-appointment-no-shows-0', },
        { tag: 'Python | TensorFlow', title: 'Chest X-Ray Images', img: 'che.png', link: 'https://www.kaggle.com/code/ahmedhaytham/chest-x-ray-images-pneumonia-with-new-class', },
        { tag: 'Python | TensorFlow', title: 'DR.Smart', img: 'dr.smart.png', link: 'https://github.com/DrSmartGDSC', },
        { tag: 'Tableau', title: 'Divy analysis', img: 'dash.jpeg', link: '', },
        { tag: 'Python', title: 'Human Activity Recognition', img: null, link: 'https://github.com/AhPro7/Human-Activity-Recognition-with-Smartphones_final', },
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
