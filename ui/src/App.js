// import { useState } from "react";

import Avatar from "./Avatar";

function Button() {
  return <button>Click Me!</button>;
}

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Button />
      <Avatar name="Heddy Lemar" img="https://i.imgur.com/yXOvdOSs.jpg"/>
    </div>
  );
}

export default App;
