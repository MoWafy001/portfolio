import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function CustomWindow({ title, show, body_style, x, y, width, height, handelClose, lock = false, resizeable = true, children }) {
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
            s && <Win body_style={body_style} handelClose={handelClose} animation_styles={props} title={title} x={x} y={y} width={width} height={height} lock={lock} resizeable={resizeable}>
                {children}
            </Win>
        )}
    </Transition>
}