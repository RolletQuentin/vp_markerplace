import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    CartProvider,
    ThemeProvider,
    AuthProvider,
} from "./utils/context/index";
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import LeftPanel from "./components/LeftPanel";

function App() {
    return (
        <Router>
            <ThemeProvider>
                <CartProvider>
                    <AuthProvider>
                        <GlobalStyle />
                        <Header />
                        <LeftPanel />
                        <Routes>
                            <Route exact path="" element={<Home />} />
                            <Route exact path="signup" element={<Signup />} />
                            <Route path="produits" element={<Products />} />

                            <Route path="produits/:id" element={<Product />} />

                            <Route path="contact" element={<Contact />} />
                        </Routes>
                        <Footer />
                    </AuthProvider>
                </CartProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
