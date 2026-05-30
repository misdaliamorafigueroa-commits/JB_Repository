import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import product1 from '../assets/producto1.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div
        id='mainCarousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={banner1}
              className='d-block w-100 carousel-image'
              alt='banner'
            />
          </div>

          <div className='carousel-item'>
            <img
              src={banner2}
              className='d-block w-100 carousel-image'
              alt='banner'
            />
          </div>
        </div>
      </div>

      <section className='container py-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h1 className='main-title'>
              Accesorios artesanales creados para resaltar tu estilo
            </h1>

            <p className='hero-text'>
              Diseños únicos y delicados elaborados a mano.
            </p>

            <Link to='/products' className='btn btn-warning text-white'>
              Ver Colección
            </Link>
          </div>

          <div className='col-lg-6 text-center'>
            <img
              src={product1}
              alt='product'
              className='img-fluid featured-image'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home