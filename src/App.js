import Win from "./Win";

const width = window.innerWidth /4;
const height = width * 3/4

const centerX = window.innerWidth / 2 - width/2 + "px"
const centerY = window.innerHeight / 2 - height/2 + "px"


function App() {
  return (
    <div style={{overflowX:'auto'}}>

      <Win title="test1" x={centerX} y={centerY} width={width} height={height} lock resizeable>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
          <span className="page-heading">Welcome</span>
          <button className="page-button">start</button>
        </div>
      </Win>

    </div>
  );
}

export default App;
