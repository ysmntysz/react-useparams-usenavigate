
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path='/products' element={<Products/>} />
         <Route path='/product-details/:id' element={<ProductDetails/>} />
       </Routes>
    </>
  )
}

export default App
