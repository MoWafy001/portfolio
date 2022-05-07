import CustomWindow from "./CustomWindow";

export default function Navigate({ show, handelClose, buttons: {
    info, links, skills, projects, education
} }) {

    const height = window.innerHeight * 0.9;
    const width = window.innerWidth / 4;

    const x = 0
    const y = window.innerHeight / 2 - height / 2

    const body_style = { fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }

    return (
        <CustomWindow title='Navigate' x={x} y={y} body_style={body_style} width={width} height={height} show={show} handelClose={handelClose}>
            <p style={{
                border: '2px solid #222',
                padding: '1em',
                boxShadow: '1em 1em #000',
                marginRight: '1em'
            }}>Click a link to open a window</p>


            <div className="list">
                <ul>
                    <li onClick={info} className="page-button">Info</li>
                    <li onClick={links} className="page-button">Links/Contacts</li>
                    <li onClick={skills} className="page-button">Skills</li>
                    <li onClick={projects} className="page-button">Projects</li>
                    <li onClick={education} className="page-button">Education</li>
                </ul>
            </div>
        </CustomWindow>
    )
}