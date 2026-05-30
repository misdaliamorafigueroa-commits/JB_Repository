import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <section className='container py-5'>
      <h1 className='section-title text-center mb-5'>
        Nuestra Colección
      </h1>

      <div className='row g-4'>
        {products.map(product => (
          <div className='col-md-6 col-lg-4' key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products