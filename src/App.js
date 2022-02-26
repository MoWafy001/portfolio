import { useState } from "react";
import { Transition, animated, easings } from "react-spring";

import Win from "./Win";

const width = window.innerWidth / 4;
const height = width * 3 / 4

const centerX = window.innerWidth / 2 - width / 2
const centerY = window.innerHeight / 2 - height / 2


function App() {

  const [welcome, setWelcome] = useState(true);

  return (
    <div style={{ overflowX: 'auto' }}>

      <Transition
        items={welcome}
        from={{ opacity: 0, top: centerY * 4, height: height / 4 }}
        enter={{ opacity: 1, top: centerY, height }}
        leave={{ opacity: 0, top: centerY, height: height / 4 }}
        config={{
          duration: 1000,
          easing: easings.easeOutBack,
        }}
      >
        {(props, isWelcome) => (

          <>
            {isWelcome ? (
              <Win animation_styles={props} title="test1" x={centerX} y={centerY} width={width} height={height} lock resizeable>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                  <span className="page-heading">on</span>
                  <button onClick={() => setWelcome(false)} className="page-button">start</button>
                </div>
              </Win>
            ) : (

              <Win animation_styles={props} title="test1" x={centerX} y={centerY} width={width} height={height} body_style={{
                background: '#444',
                color: '#fff'
              }} lock resizeable>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                  <span className="page-heading">off</span>
                  <button onClick={() => setWelcome(true)} className="page-button">start</button>
                </div>
              </Win>
            )
            }
          </>

        )}
      </Transition>


    </div>
  );
}

export default App;
