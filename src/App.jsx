import React from 'react'
import HomePage from './page/HomePage.component'
import productCategories from './page/Product.categories'

const App = () => {
  return (
    <div>
      <HomePage productCategories={productCategories.sections}/>
    </div>
  )
}

export default App