import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar() {
  const { cartItems } = useContext(CartContext)
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
      <div className='container'>
        <Link className='navbar-brand brand-logo' to='/'>
          Jade Bijouterie
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarMenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarMenu'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Inicio
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                Nosotros
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Productos
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/tips'>
                Consejos
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/reviews'>
                Reseñas
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contacto
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to="/cart"
                className="nav-link d-inline-flex align-items-center"
              >
                <div className="contenedor-carrito">
                  <FaShoppingCart size={24} />

                  {cartItems.length > 0 && (
                    <span className="contador-carrito">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar