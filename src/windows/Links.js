import CustomWindow from "../sub/CustomWindow";
import { LINKS } from "../const";

export default function Links({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const calcSize = () => {
        const height = window.innerHeight * 0.7;
        const width = height * 0.8;

        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2

        return [width, height, x, y]
    }

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='Links' calcSize={calcSize} body_style={body_style} show={show} handelClose={handelClose}>
            <div className="list">
                <ul>
                    {LINKS.map(link => (
                        <a key={link.href + link.title} target="_blank" rel="noreferrer" href={link.href}>
                            <li style={{ '--brd': link.brd, '--sdw': link.sdw }} className="page-button">{link.title}</li>
                        </a>
                    ))}
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
        </CustomWindow>
    )
}