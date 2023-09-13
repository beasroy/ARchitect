import Home from "./pages/Home.jsx";
import Budget from "./pages/Budget.jsx";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/budget" element={<Budget />}/>
      </Routes>
    </Router>

  );
}

export default App;
