import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ProductsList } from "./productsList/ProductsList";
import { ProductDetails } from "./productDetail/ProductDetails";
import './styles.scss';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={ <h1>Hoqla</h1> }/>
          <Route path="/items" element={ <ProductsList/> }/>
          <Route path="/item/:id" element={ <ProductDetails/> }/>
    </Routes>
    </>
  )
}

export default App
