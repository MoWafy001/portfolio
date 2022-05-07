import CustomWindow from "../sub/CustomWindow";
import { INFO } from '../const'

export default function Info({ show, handelClose, buttons: { handelNext, handelNavigate } }) {

    const height = window.innerHeight * 0.72;
    const width = height * 0.7;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='Info' x={x} y={y} body_style={body_style} width={width} height={height} show={show} handelClose={handelClose}>
            <img className="noselect profpic" draggable={false} style={{

            }} src={INFO.pic} alt="profile pic" />

            <p style={{
                border: '2px solid #222',
                padding: '1em',
                boxShadow: '1em 1em #000',
                marginRight: '1em'
            }}>{INFO.about}</p>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1em'
            }}>
                <button onClick={handelNavigate} className="page-button">Navigate</button>
                <button onClick={handelNext} className="page-button">Next (Links)</button>
            </div>
        </CustomWindow>
    )
}