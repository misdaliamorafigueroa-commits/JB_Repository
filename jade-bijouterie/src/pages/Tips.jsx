import { Link } from 'react-router-dom'

function Tips() {
  const tips = [
    {
      id: 1,
      title: 'Evita el Agua',
      description:
        'Mantén tus accesorios alejados del agua para conservar su brillo y prolongar su durabilidad.',
      icon: '💧'
    },

    {
      id: 2,
      title: 'Guárdalos Correctamente',
      description:
        'Guarda tus accesorios en lugares secos y separados para evitar rayones o daños.',
      icon: '📦'
    },

    {
      id: 3,
      title: 'Evita Perfumes y Químicos',
      description:
        'No apliques perfumes, cremas o productos químicos directamente sobre tus accesorios.',
      icon: '🌸'
    },

    {
      id: 4,
      title: 'Limpieza Cuidadosa',
      description:
        'Utiliza un paño suave para limpiar tus accesorios después de cada uso y mantener su brillo.',
      icon: '✨'
    },

    {
      id: 5,
      title: 'Retíralos Antes de Dormir',
      description:
        'Dormir con accesorios puede deformar o dañar las piezas más delicadas hechas a mano.',
      icon: '🌙'
    },

    {
      id: 6,
      title: 'Manipúlalos con Cuidado',
      description:
        'La bisutería artesanal requiere un trato delicado para conservar su belleza por más tiempo.',
      icon: '💎'
    }
  ]

  return (
    <section className='tips-page py-5'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h1 className='section-title'>
            Consejos para el Cuidado de tu Bisutería
          </h1>

          <p className='tips-subtitle'>
            Mantén tus accesorios artesanales hermosos, elegantes y en excelente estado por más tiempo.
          </p>
        </div>

        <div className='row g-4'>
          {tips.map(tip => (
            <div
              className='col-md-6 col-lg-4'
              key={tip.id}
            >
              <div className='card tip-card shadow border-0 h-100'>
                <div className='card-body text-center p-4'>
                  <div className='tip-icon mb-4'>
                    {tip.icon}
                  </div>

                  <h4 className='tip-title'>
                    {tip.title}
                  </h4>

                  <p className='tip-description'>
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='tips-banner mt-5 text-center'>
          <h2>
            Bisutería Artesanal Hecha con Amor ✨
          </h2>

          <p className='mt-3'>
            Cada pieza de Jade Bijouterie es elaborada cuidadosamente para resaltar tu estilo, elegancia y personalidad en cada ocasión.
          </p>

          <Link
            to='/products'
            className='btn btn-warning text-white'
          >
            Ver Colección
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Tips