function Tips() {
  const tips = [
    {
      id: 1,
      title: 'Avoid Water',
      description:
        'Keep your jewelry away from water to preserve its shine and durability.',
      icon: '💧'
    },

    {
      id: 2,
      title: 'Store Properly',
      description:
        'Store accessories in dry places and separate them to avoid scratches.',
      icon: '📦'
    },

    {
      id: 3,
      title: 'Avoid Perfumes',
      description:
        'Do not apply perfumes or chemicals directly on jewelry pieces.',
      icon: '🌸'
    },

    {
      id: 4,
      title: 'Clean Carefully',
      description:
        'Use a soft cloth to clean your accessories after each use.',
      icon: '✨'
    },

    {
      id: 5,
      title: 'Remove Before Sleeping',
      description:
        'Sleeping with jewelry can damage delicate handmade pieces.',
      icon: '🌙'
    },

    {
      id: 6,
      title: 'Handle with Care',
      description:
        'Handmade jewelry requires delicate handling for longer durability.',
      icon: '💎'
    }
  ]

  return (
    <section className='tips-page py-5'>

      <div className='container'>

        <div className='text-center mb-5'>

          <h1 className='section-title'>
            Jewelry Care Tips
          </h1>

          <p className='tips-subtitle'>
            Keep your handmade accessories beautiful and elegant for longer.
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
            Handmade Jewelry with Love ✨
          </h2>

          <p className='mt-3'>
            Every Jade Bijouterie piece is carefully crafted
            to highlight your elegance and personality.
          </p>

          <button className='btn btn-warning text-white mt-3'>
            Explore Collection
          </button>

        </div>

      </div>

    </section>
  )
}

export default Tips