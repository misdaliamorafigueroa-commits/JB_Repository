import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {

  const {
    cartItems,
    removeFromCart,
    getTotal
  } = useContext(CartContext)

  const [loading, setLoading] = useState(false)
  const [purchaseCompleted, setPurchaseCompleted] =
    useState(false)

  const handleCheckout = () => {

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      setPurchaseCompleted(true)

    }, 3000)
  }

  return (
    <section className='container py-5'>

      <h1 className='section-title mb-5'>
        Carrito de Compras
      </h1>

      {cartItems.length === 0 ? (
        <div className='card p-5 text-center shadow border-0'>
          <h4>Tu carrito está vacío</h4>
        </div>
      ) : (
        <>

          {cartItems.map(item => (

            <div
              key={item.id}
              className='card mb-3 shadow border-0'
            >

              <div className='card-body d-flex justify-content-between align-items-center'>

                <div>
                  <h5>{item.name}</h5>

                  <p>{item.price}</p>
                </div>

                <button
                  className='btn btn-danger'
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>

              </div>

            </div>

          ))}

          <div className='card p-4 shadow border-0 mt-4'>

            <h3>
              Total: ${getTotal()}
            </h3>

            <hr />

            <input
              type='text'
              className='form-control mb-3'
              placeholder='Nombre del titular de la tarjeta'
            />

            <input
              type='text'
              className='form-control mb-3'
              placeholder='Número de tarjeta'
            />

            <input
              type='text'
              className='form-control mb-3'
              placeholder='Fecha de expiración'
            />

            <input
              type='text'
              className='form-control mb-4'
              placeholder='CVV'
            />

            {!loading ? (
              <button
                className='btn btn-warning text-white'
                onClick={handleCheckout}
              >
                Pagar ahora
              </button>
            ) : (
              <button
                className='btn btn-warning text-white'
                disabled
              >
                <span className='spinner-border spinner-border-sm'></span>

                Procesando pago...
              </button>
            )}

          </div>

          {purchaseCompleted && (

            <div className='card p-5 shadow border-0 mt-5 success-box'>

              <h2>
                Compra completada
              </h2>

              <p className='mt-3'>
                Gracias por comprar en Jade Bijouterie.
              </p>

              <h4 className='mt-4'>
                Factura
              </h4>

              <hr />

              {cartItems.map(item => (
                <p key={item.id}>
                  {item.name} - {item.price}
                </p>
              ))}

              <hr />

              <h3>
                Total pagado: ${getTotal()}
              </h3>

            </div>

          )}

        </>
      )}

    </section>
  )
}

export default Cart