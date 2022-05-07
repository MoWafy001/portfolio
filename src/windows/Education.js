import CustomWindow from "../sub/CustomWindow";
import { CERTIFICATES } from "../const";

export default function Education({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.9;
    const width = height * 1.5;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='Education' x={x} y={y} body_style={body_style} width={width} height={height} show={show} handelClose={handelClose}>
            <p style={{
                border: '2px solid #222',
                padding: '0.5em 2em',
                boxShadow: '0.5em 0.5em #000',
                marginRight: '0.5em'
            }}>Certs</p>

            <div className="certs">
                {CERTIFICATES.map(c => (
                    <a key={c.tag + c.title} href={c.link} target="_blank" rel="noreferrer" className="cell">
                        {c.img ?
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <img src={c.img} alt="img" />
                                <span className='t'>{c.title}</span>
                                <span className="tag">{c.tag}</span>
                            </div>
                            :
                            <div className="cover">
                                <span className='t'>{c.title}</span>
                                <span className="tag">{c.tag}</span>
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
        </CustomWindow>
    )
}