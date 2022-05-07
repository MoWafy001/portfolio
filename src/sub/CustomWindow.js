import { Transition, easings } from "react-spring";

import Win from "./Win";


// check if the screen is too small
const shouldResize = () => {
    if (window.innerWidth <= window.innerHeight)
        return true

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        return true

    return false
}


export default function CustomWindow({ title, show, body_style, calcSize, handelClose, lock = false, resizeable = true, children }) {

    let [width, height, x, y] = calcSize();

    let lockk = lock;
    let resizeablee = resizeable;

    if (shouldResize()) {
        console.log('resize');
        width = window.innerWidth * 0.9
        height = window.innerHeight * 0.8
        x = window.innerWidth / 2 - width / 2
        y = window.innerHeight / 2 - height / 2
        lockk = true
        resizeablee = false
    } else {
        lockk = lock
        resizeablee = resizeable
    }


    return <Transition
        items={show}
        from={{ opacity: 0, top: y * 4, height: height / 4 }}
        enter={{ opacity: 1, top: y, height }}
        leave={{ opacity: 0, top: y * 4, height: height / 4 }}
        config={{
            duration: 1000,
            easing: easings.easeOutBack,
        }}>

        {(props, s) => (
            s && <Win body_style={body_style} handelClose={handelClose} animation_styles={props} title={title} x={x} y={y} width={width} height={height} lock={lockk} resizeable={resizeablee}>
                {children}
            </Win>
        )}
    </Transition>
}