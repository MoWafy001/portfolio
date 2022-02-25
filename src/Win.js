import { useState } from 'react';

export default function Win({ children, x, y, width, height, title }) {
    const page_height = window.innerHeight;
    const page_width = window.innerWidth;

    const [size, setSize] = useState({
        w: width || 300,
        h: height || 200
    })
    const [mousePressed, setMousePressed] = useState(false)
    const [pos, setPos] = useState({
        top: y || (page_width - size.w) / 2 + "px",
        left: x || (page_height - size.h) / 2 + "px",
    })
    const [cursor, setCursor] = useState('default')
    const [win_title] = useState(title || 'title') 


    const handel_move = e => {
        if (mousePressed)
            window.move_window = move_window
        else
            window.move_window = null
    }

    const move_window = () => {
        if (cursor !== 'default') return
        const { mouseX, mouseY } = window;

        setPos({
            left: (mouseX - size.w / 2) + "px",
            top: (mouseY - 20) + "px",
        })
    }

    const handel_window_mouse_move = e => {
        const { clientX, clientY } = e;


        const left_start = Number(pos.left.slice(0, -2));
        const top_start = Number(pos.top.slice(0, -2));
        const left_end = Number(pos.left.slice(0, -2)) + size.w;
        const top_end = Number(pos.top.slice(0, -2)) + size.h;

        if (Math.abs(clientX - left_end) < 10) { // border right
            setCursor('col-resize')

            window.resize_window = () => {
                if (window.mousePressed) {
                    setSize(oldSize => ({
                        w: window.mouseX - left_start,
                        h: oldSize.h
                    }))
                } else {
                    window.resize_window = null
                }
            }

        }

        else if (Math.abs(clientX - left_start) < 10) { // border left
            setCursor('col-resize')
            window.resize_window = () => {
                if (window.mousePressed) {
                    const ww = size.w;
                    setSize(oldSize => ({
                        w: left_end - window.mouseX,
                        h: oldSize.h
                    }))
                    setPos(oldPos => ({
                        top: oldPos.top,
                        left: (Number(pos.left.slice(0, -2)) + (ww - left_end + window.mouseX)) + "px"
                    }))
                } else {
                    window.resize_window = null
                }
            }
        }

        else if (Math.abs(clientY - top_end) < 5) { // border bottom
            setCursor('row-resize')
            window.resize_window = () => {
                if (window.mousePressed) {
                    setSize(oldSize => ({
                        w: oldSize.w,
                        h: window.mouseY - top_start,
                    }))
                } else {
                    window.resize_window = null
                }
            }
        }

        else {
            if (cursor !== 'default') {
                setCursor('default')
            }
        }
    }

    return (
        <div
            onMouseMove={handel_window_mouse_move}
            className='window' style={{
                top: pos.top,
                left: pos.left,
                width: size.w,
                height: size.h,
                fontSize: `min( 1rem ,${size.w / 20}px)`,
                cursor
            }}>
            <div
                draggable={false}
                onMouseDown={() => setMousePressed(true)}
                onMouseUp={() => setMousePressed(false)}
                onMouseMove={handel_move}
                className="win-head">
                <div className="win-ops">
                    <div className='win-close'></div>
                </div>
                <div className="win-title">
                    <span>{win_title}</span>
                </div>
            </div>
            <div className="win-body">
                {children}
            </div>
        </div>
    )
}