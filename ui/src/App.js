import Square from "./components/Square";
// import { useState } from "react";

function App() {

  
  return (
    <>
    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>

    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>

    <div className="board-row">
    <Square/>
    <Square/>
    <Square/>
    </div>
    </>
  )
  
}

export default App;
