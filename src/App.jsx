import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from  './Cart'
import { useState } from 'react'

import Data from './Data'

const App = () => {
  const [search,setSearch]=useState("")
  const[cart,setCart]=useState([])


  function handleClick(item){
    setCart([...cart,item])
  }

  return (
    <div className='App'>
     <BrowserRouter>
     <Navbar setSearch={setSearch} size={cart.length}/>
      <Routes>
        <Route path='/' element={<Home search={search} handleClick={handleClick}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
      
      </Routes>
     </BrowserRouter>     
    </div>
  )
}

export default App