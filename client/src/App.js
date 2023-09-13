import Home from "./pages/Home.jsx";
import Budget from "./pages/Budget.jsx";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Model from "./pages/Model.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route exact path="/model" element={<Model />} />
      </Routes>
    </Router>
  );
}

export default App;
