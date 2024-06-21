import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Menu from "./pages/Menu.jsx";
import Order from "./pages/Order.jsx";
import OrderTaking from "./pages/OrderTaking.jsx";
import Feedback from "./pages/Feedback.jsx";
import Payment from "./pages/Payment.jsx";
import OrderStatus from "./pages/OrderStatus.jsx";
import POS from "./pages/POS.jsx";
import Settings from "./pages/Settings.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/order-taking" element={<OrderTaking />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/order-status" element={<OrderStatus />} />
        <Route exact path="/pos" element={<POS />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;