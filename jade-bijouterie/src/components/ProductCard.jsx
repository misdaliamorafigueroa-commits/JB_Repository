import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)

  return (
    <div className='card product-card h-100 shadow border-0'>

      <img
        src={product.image}
        alt={product.name}
        className='card-img-top product-image'
      />

      <div className='card-body text-center'>

        <h5>{product.name}</h5>

        <p>{product.description}</p>

        <h6 className='product-price'>
          {product.price}
        </h6>

        <button
          className='btn btn-warning text-white'
          onClick={() => addToCart(product)}
        >
          Agregar al Carrito
        </button>

      </div>
    </div>
  )
}

export default ProductCard