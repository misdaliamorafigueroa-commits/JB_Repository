import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer py-5 mt-5'>
      <div className='container text-center'>
        <h3 className='brand-logo'>
          Jade Bijouterie
        </h3>

        <p className='mt-3'>
          Joyas hechas a mano con elegancia y amor.
        </p>

        <div className='d-flex justify-content-center gap-4 mt-4 social-icons'>
          <a href='#'>
            <FaFacebook />
          </a>

          <a href='#'>
            <FaInstagram />
          </a>

          <a href='https://wa.me/50688990305'>
            <FaWhatsapp />
          </a>
        </div>

        <p className='mt-4'>
          Heredia, Costa Rica
        </p>
      </div>
    </footer>
  )
}

export default Footer