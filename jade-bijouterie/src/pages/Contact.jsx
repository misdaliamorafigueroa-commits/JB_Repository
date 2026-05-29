import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa'

function Contact() {
  return (
    <section className='container py-5'>
      <h1 className='section-title mb-5'>
        Contact Us
      </h1>

      <div className='row'>
        <div className='col-lg-6'>
          <form className='d-flex flex-column gap-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Your Name'
            />

            <input
              type='email'
              className='form-control'
              placeholder='Your Email'
            />

            <textarea
              className='form-control'
              rows='5'
              placeholder='Your Message'
            ></textarea>

            <button className='btn btn-warning text-white'>
              Send Message
            </button>
          </form>
        </div>

        <div className='col-lg-6 mt-5 mt-lg-0'>
          <div className='card shadow border-0 p-4'>
            <h4>Contact Information</h4>

            <p className='mt-3'>
              WhatsApp: +506 8899-0305
            </p>

            <div className='d-flex gap-4 mt-4 social-icons'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact