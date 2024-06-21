import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bar from "./pages/Bar.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import OrderTaking from "./pages/OrderTaking.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Bar />} />
        <Route exact path="/kitchen" element={<Kitchen />} />
        <Route exact path="/order-taking" element={<OrderTaking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;