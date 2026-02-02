import { createRoot } from 'react-dom/client'
import React from 'react'
import PRODUCTS from './mock-data/products'

class Products extends React.Component {
    //state declaration
    state = {
        products: PRODUCTS,
        selectedProduct: null
    }
    onProductSelect = (product) => {
        console.log(product)
        this.setState(({ ...this.state, selectedProduct: product }))
    }
    render() {
        return <div style={{ marginLeft: 60, marginTop: 50 }}>
            {
                this.state.products.map(product => {
                    return <section key={product.id}>
                        <p style={{ cursor: 'pointer' }} onClick={() => {
                            this.onProductSelect(product)
                        }} >
                            {product.title}
                        </p>
                    </section>
                })
            }
            {/* Selected Product */}
            {this.state.selectedProduct ? <div>
                <h1>Id :{this.state.selectedProduct.id}</h1>
                <img src={this.state.selectedProduct.image} height={100} width={100} />
                <p>{this.state.selectedProduct.description}</p>
            </div> : <h1>No Product Selected</h1>}
        </div>
    }
}

function App() {
    return <>
        <Products />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
