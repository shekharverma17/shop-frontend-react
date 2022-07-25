import ProductList from './components/Product/ProductList'
import ProductDetails from './components/Product/ProductDetails'
import CreateProduct from './components/Product/CreateProduct'
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
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route exact path="/create/" element={<CreateProduct />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}
