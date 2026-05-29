import { Link } from 'react-router-dom'

function Navbar() {
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
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/tips'>
                Tips
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/reviews'>
                Reviews
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/cart'>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar