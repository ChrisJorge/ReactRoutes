import "./style.css";
import {Route, Routes} from "react-router-dom";
// Importing Pages

import Homepage from "./pages/Homepage";
import Collection from "./pages/Collection";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/collection" element={<Collection/>}/>
      </Routes>
    </div>
  )
}

export default App
