import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { produce } from 'immer'

function Products() {
    const initialState = {
        products: [],
        isLoading: false, //to show spinner
        error: null
    }
    const [products, setProducts] = useState(initialState)

    const fetchProducts = async () => {
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const tmpProducts = await response.json()
            setProducts(produce(products, (draft) => {
                draft.products = tmpProducts,
                    draft.isLoading = true
            }))
            console.log(products)
        }
        catch (err) {
            setProducts(produce(products, (draft) => {
                draft.err = err
                draft.isLoading = true
            }))
        }
    }
    useEffect(() => {
        //api call 
        fetchProducts()
    }, [])
    //conditional rendering: how to use if...else..elseif
    if (products.error) {
        return <div>
            <h1>Error : {error.message}</h1>
        </div>
    } else if (!products.isLoading) {
        return <h2>Loading...</h2>
    } else {
        return <div>
            <h1>Products</h1>
            <hr />
            <div>
                {
                    products.products.map(product => {
                        return <section>
                            <img src={product.category.image} height={200} width={200} />
                            <h1>{product.title} </h1>
                            <p>{product.description}</p>
                            <h5>{product.price}</h5>
                        </section>
                    })
                }
            </div>
        </div>
    }
}

function App() {
    return <Products />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
