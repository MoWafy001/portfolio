import CustomWindow from "../sub/CustomWindow";

export default function Welcome({ show, handelClose, buttons: { handelNext } }) {

    const calcSize = () => {
        const width = window.innerWidth / 4;
        const height = width * 3 / 4
        
        const x = window.innerWidth / 2 - width / 2
        const y = window.innerHeight / 2 - height / 2

        return [width, height, x, y]
    }

    return (
        <CustomWindow title='welcome' calcSize={calcSize} show={show} handelClose={handelClose}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <span className="page-heading">Welcome</span>
                <button onClick={handelNext} className="page-button">start</button>
            </div>
        </CustomWindow>
    )
}