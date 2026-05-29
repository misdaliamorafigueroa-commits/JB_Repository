function About() {
  return (
    <section className='about-page py-5'>

      <div className='container'>

        {/* HERO */}

        <div className='about-hero text-center mb-5'>

          <h1 className='section-title'>
            About Jade Bijouterie
          </h1>

          <p className='about-subtitle mt-3'>
            Handmade jewelry inspired by elegance,
            creativity, and feminine beauty ✨
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
              Jade Bijouterie was born from a passion
              for handmade accessories and elegant details.
              Every piece is carefully crafted to reflect
              personality, confidence, and style.
            </p>

            <p className='about-text'>
              We believe jewelry is more than an accessory —
              it is a way to express emotions, beauty,
              and individuality.
            </p>

            <button className='btn btn-warning text-white mt-3'>
              Explore Collection
            </button>

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
                  Our Mission
                </h3>

                <p className='about-card-text'>
                  Create elegant handmade jewelry that
                  empowers women to feel unique,
                  confident, and beautiful every day.
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
                  Our Vision
                </h3>

                <p className='about-card-text'>
                  Become a recognized jewelry brand in
                  Costa Rica known for creativity,
                  elegance, and exceptional quality.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* VALUES */}

        <div className='about-values text-center'>

          <h2 className='about-title mb-5'>
            Our Values
          </h2>

          <div className='row g-4'>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  ❤️
                </div>

                <h4>
                  Passion
                </h4>

                <p>
                  Every accessory is created with love
                  and dedication.
                </p>

              </div>

            </div>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  🎨
                </div>

                <h4>
                  Creativity
                </h4>

                <p>
                  Unique handmade designs inspired by
                  modern elegance.
                </p>

              </div>

            </div>

            <div className='col-md-4'>

              <div className='value-box shadow-sm'>

                <div className='value-icon'>
                  🌸
                </div>

                <h4>
                  Quality
                </h4>

                <p>
                  We focus on beautiful details and
                  premium handcrafted finishes.
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