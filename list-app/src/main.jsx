import { createRoot } from 'react-dom/client'
import PRODUCTS from './mock-data/products'

function ProductList({ products }) {
    return <div>
        {
            products.map(product => {
                return <ProductDetails product={product} key={product.id} />
            })
        }
    </div>
}
function ProductDetails({product}) {
    return <section>
        <h1>Id : {product.id}</h1>
        <img src={product.image} height={100} width={100} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h1>{product.category}</h1>
        <h3>{product.rating.rate} {product.rating.count}</h3>
    </section>
}


function App() {
    return <ProductList products={PRODUCTS} />
}

createRoot(document.getElementById('root')).render(<App />)
