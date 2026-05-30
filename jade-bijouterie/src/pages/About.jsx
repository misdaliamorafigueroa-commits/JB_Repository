import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='about-page py-5'>

      <div className='container'>

        {/* HERO */}

        <div className='about-hero text-center mb-5'>

          <h1 className='section-title'>
            Sobre Jade Bijouterie
          </h1>

          <p className='about-subtitle mt-3'>
            Joyas hechas a mano inspiradas en la elegancia,
            la creatividad y la belleza femenina. ✨
          </p>

        </div>

        {/* STORY */}

        <div className='row align-items-center g-5 mb-5'>

          <div className='col-lg-6'>

            <img
              src='https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop'
              alt='Jewelry'
              className='img-fluid about-image shadow'
            />

          </div>

          <div className='col-lg-6'>

            <h2 className='about-title mb-4'>
              Our Story
            </h2>

            <p className='about-text'>
              Jade Bijouterie nació de la pasión por los 
              accesorios hechos a mano y los detalles elegantes. 
              Cada pieza está cuidadosamente elaborada para reflejar 
              personalidad, confianza y estilo.
            </p>

            <p className='about-text'>
              Creemos que las joyas son más que un accesorio: son 
              una forma de expresar emociones, belleza e individualidad.
            </p>

            <Link to='/products' className='btn btn-warning text-white'>
              Ver Colección
            </Link>

          </div>

        </div>

        {/* MISSION & VISION */}

        <div className='row g-4 mb-5'>

          <div className='col-md-6'>

            <div className='card about-card shadow border-0 h-100'>

              <div className='card-body p-5 text-center'>

                <div className='about-icon mb-4'>
                  💎
                </div>

                <h3 className='about-card-title'>
                  Nuestra Misión
                </h3>

                <p className='about-card-text'>
                  Diseñar y elaborar accesorios artesanales elegantes 
                  que permitan a cada mujer expresar su estilo y sentirse 
                  única, segura y hermosa en su día a día.
                </p>

              </div>

            </div>

          </div>

          <div className='col-md-6'>

            <div className='card about-card shadow border-0 h-100'>

              <div className='card-body p-5 text-center'>

                <div className='about-icon mb-4'>
                  ✨
                </div>

                <h3 className='about-card-title'>
                  Nuestra Visión
                </h3>

                <p className='about-card-text'>
                  Ser una marca líder de bisutería artesanal en Costa Rica, 
                  reconocida por la creatividad de nuestros diseños, la 
                  elegancia de nuestras piezas y el compromiso con la calidad y 
                  satisfacción de nuestros clientes.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* VALUES */}

        <div className='about-values text-center'>

          <h2 className='about-title mb-5'>
            Nuestros valores
          </h2>

          <div className='row g-4'>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  ❤️
                </div>

                <h4>
                  Pasión
                </h4>

                <p>
                  Creamos cada accesorio con amor, dedicación y 
                  atención a cada detalle para ofrecer piezas únicas 
                  y especiales.
                </p>

              </div>

            </div>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  🎨
                </div>

                <h4>
                  Creatividad
                </h4>

                <p>
                  Diseñamos accesorios originales inspirados en 
                  la elegancia, las tendencias actuales y la 
                  expresión personal de cada cliente.
                </p>

              </div>

            </div>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  🌸
                </div>

                <h4>
                  Calidad
                </h4>

                <p>
                  Seleccionamos cuidadosamente materiales y 
                  acabados para garantizar productos duraderos, 
                  hermosos y elaborados con excelencia.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About