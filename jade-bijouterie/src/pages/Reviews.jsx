function Reviews() {

  const reviews = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      avatar:
        'https://i.pravatar.cc/150?img=32',
      rating: 5,
      comment:
        'Absolutely beautiful handmade jewelry. The quality exceeded my expectations and the designs are elegant.'
    },

    {
      id: 2,
      name: 'Fernanda Ruiz',
      avatar:
        'https://i.pravatar.cc/150?img=12',
      rating: 5,
      comment:
        'I loved every accessory I purchased. Fast delivery and amazing customer service.'
    },

    {
      id: 3,
      name: 'Lucia Martinez',
      avatar:
        'https://i.pravatar.cc/150?img=45',
      rating: 5,
      comment:
        'The bracelets and necklaces are stunning. I always get compliments when wearing them.'
    },

    {
      id: 4,
      name: 'Andrea Lopez',
      avatar:
        'https://i.pravatar.cc/150?img=28',
      rating: 4,
      comment:
        'Beautiful craftsmanship and elegant packaging. Perfect gift ideas for special occasions.'
    },

    {
      id: 5,
      name: 'Sofia Ramirez',
      avatar:
        'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment:
        'Excellent quality and unique designs. Jade Bijouterie became one of my favorite brands.'
    },

    {
      id: 6,
      name: 'Valeria Castro',
      avatar:
        'https://i.pravatar.cc/150?img=20',
      rating: 5,
      comment:
        'Elegant, delicate, and modern jewelry. Everything looks premium and handmade with love.'
    }
  ]

  return (
    <section className='reviews-page py-5'>

      <div className='container'>

        <div className='text-center mb-5'>

          <h1 className='section-title'>
            Customer Reviews
          </h1>

          <p className='reviews-subtitle'>
            Discover what our customers say about
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
            More Than Accessories 💎
          </h2>

          <p className='mt-3'>
            Our mission is to create handmade jewelry
            that makes every customer feel elegant,
            confident, and unique.
          </p>

          <button className='btn btn-warning text-white mt-4'>
            Shop Now
          </button>

        </div>

      </div>

    </section>
  )
}

export default Reviews