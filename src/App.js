import "./App.css";
import {  BrowserRouter as Router , Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
