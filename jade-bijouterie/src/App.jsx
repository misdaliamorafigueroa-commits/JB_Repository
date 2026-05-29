/* eslint-disable no-undef */
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CartProvider from './context/CartContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Tips from './pages/Tips'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Cart from './pages/Cart'

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />

        <ToastContainer />

      </HashRouter>

    </CartProvider>
  )
}

export default App