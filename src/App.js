import ProductList from './components/Product/ProductList'
import ProductDetails from './components/Product/ProductDetails'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
export default function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/products/' element={<ProductList />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}
