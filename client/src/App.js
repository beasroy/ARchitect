import Home from "./pages/Home.jsx";
import Budget from "./pages/Budget.jsx";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Model from "./pages/Model.jsx";
import HouseModels from "./pages/HouseModels.jsx"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route exact path="/model" element={<Model />} />
        <Route exact path="/explore" element={<HouseModels />} />

      </Routes>
    </Router>
  );
}

export default App;
