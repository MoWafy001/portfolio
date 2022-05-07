import CustomWindow from "../sub/CustomWindow";
import { PROJECTS } from "../const";

export default function Projects({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const calcSize = () => {
        const height = window.innerHeight * 0.9;
        const width = height * 1.5;

        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2

        return [width, height, x, y]
    }

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='projects' calcSize={calcSize} body_style={body_style} show={show} handelClose={handelClose}>
            <p style={{
                border: '2px solid #222',
                padding: '0.5em 2em',
                boxShadow: '0.5em 0.5em #000',
                marginRight: '0.5em'
            }}>Projects</p>

            <div className="projects">
                {PROJECTS.map(p => (
                    <a key={p.tag + p.title} href={p.link} target="_blank" rel="noreferrer" className="cell">
                        {p.img ?
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
        </CustomWindow>
    )
}