import { useState } from 'react'
import './App.css'
import products from './mocks/products.json'
import Product from './components/Product'
import Basket from './components/Basket'

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const handleProductSelect = (product) => {
    setOrderedProducts(...orderedProducts, product);
  }

  return (
    <>
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section>
          {products.map((product) => (
            <Product product={product} onProductSelect={handleProductSelect}/>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
