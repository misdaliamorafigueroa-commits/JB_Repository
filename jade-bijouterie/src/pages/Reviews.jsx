import { Link } from 'react-router-dom'

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'María González',
      avatar: 'https://i.pravatar.cc/150?img=32',
      rating: 5,
      comment:
        'La calidad de los accesorios superó mis expectativas. Los diseños son hermosos, elegantes y muy bien elaborados.'
    },

    {
      id: 2,
      name: 'Fernando Ruiz',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      comment:
        'Me encantó cada pieza que compré. La atención fue excelente y la entrega fue rápida y segura.'
    },

    {
      id: 3,
      name: 'Lucía Martínez',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      comment:
        'Las pulseras y collares son preciosos. Siempre recibo cumplidos cuando los uso.'
    },

    {
      id: 4,
      name: 'Andrea López',
      avatar: 'https://i.pravatar.cc/150?img=28',
      rating: 4,
      comment:
        'Los detalles y la presentación son excelentes. Son regalos perfectos para ocasiones especiales.'
    },

    {
      id: 5,
      name: 'Sofía Ramírez',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment:
        'Diseños únicos y de gran calidad. Jade Bijouterie se ha convertido en una de mis marcas favoritas.'
    },

    {
      id: 6,
      name: 'Valeria Castro',
      avatar: 'https://i.pravatar.cc/150?img=20',
      rating: 5,
      comment:
        'Accesorios elegantes, delicados y modernos. Cada pieza refleja dedicación y amor por la artesanía.'
    }
  ]

  return (
    <section className='reviews-page py-5'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h1 className='section-title'>
            Reseñas de Nuestros Clientes
          </h1>

          <p className='reviews-subtitle'>
            Descubre lo que opinan nuestros clientes sobre
            Jade Bijouterie ✨
          </p>
        </div>

        <div className='row g-4'>
          {reviews.map(review => (
            <div
              className='col-md-6 col-lg-4'
              key={review.id}
            >
              <div className='card review-card-modern shadow border-0 h-100'>
                <div className='card-body p-4'>
                  <div className='d-flex align-items-center mb-4'>
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className='review-avatar'
                    />

                    <div className='ms-3'>
                      <h5 className='mb-1'>
                        {review.name}
                      </h5>

                      <div className='review-stars'>
                        {'⭐'.repeat(review.rating)}
                      </div>
                    </div>
                  </div>

                  <p className='review-comment'>
                    "{review.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='reviews-banner mt-5 text-center'>
          <h2>
            Más que Accesorios 💎
          </h2>

          <p className='mt-3'>
            Nuestra misión es crear accesorios artesanales
            que hagan sentir a cada cliente elegante,
            segura, especial y única en cada momento.
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

export default Reviews