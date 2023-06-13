
/**
 * 
 * Sharing data between components
 */

import CommonButton from "./components/CommonButton";
import Button from "./components/Button";

function App() {
  
  return (
    <>
    <h2>Button that are sharing State</h2>
    <CommonButton/>
    <br/>

    <h2>Button that are not sharing state</h2>
    <Button/>
    <Button/>
    </>
  );
}

export default App;
