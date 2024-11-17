import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Products from "./pages/products"
import Contact from "./pages/contact"
import SingleProduct from "./pages/single-product"
export default function App () {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={< Home/>}></Route>
                <Route path="/home"element={< Home/>}></Route>
                <Route path="/about"element={< About/>}></Route>
                <Route path="/products"element={< Products/>}></Route>
                <Route path="/contact"element={< Contact/>}></Route>
                <Route path="/product/:productId"element={< SingleProduct/>}></Route>
                
            </Routes>
        </Router>
        </>
    )
}