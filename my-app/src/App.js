import "./styles.css";
import Sto from "./Store";
import Suc from "./Suc";
import Cal from "./Cal";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Navbar";

//import CartProvider from './CartContext'
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
export default function App() {
  return (
    <CartProvider>
      <Container>
        <div className="App">
          <Nav></Nav>
          <BrowserRouter>
            <Routes>
              <Route index element={<Sto />} />
              <Route path="/success" element={<Suc />} />
              <Route path="/cancel" element={<Cal />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </CartProvider>
  );
}
