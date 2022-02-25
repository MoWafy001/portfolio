import Win from "./Win";

const centerX = window.innerWidth/2 - 200 + "px"
const centerY = window.innerHeight/2 - 150 + "px"


function App() {
  return (
    <div>

      <Win title="test1" x={centerX} y={centerY} width={400} height={300}>
        <span>test1</span>
      </Win>

    </div>
  );
}

export default App;
