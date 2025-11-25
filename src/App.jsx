import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CartManagement from './pages/CartManagement.jsx'

const App = () => {
  return (
   <>
   <Toaster />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/products/:id" element={<ProductDetails />}/>
    <Route path="/CartManagement" element={<CartManagement />}/>

   </Routes>
   <Footer />
  </>
  )
}

export default App