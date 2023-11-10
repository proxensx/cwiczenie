import { useState } from 'react'
import './App.css'
import products from './mocks/products.json'
import Product from './components/Product'

function App() {

  return (
    <>
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
