import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({setSearch,size}) => {
  return (
    <div className="Nav">
    <nav className='navbar'>
        <article className='navart'>
            <div className='navdiv'><Link to={'/'} style={{color:'white',textDecoration:'none'}}>ShopCart</Link></div>
            <div className='navdiv'><Link to={'/'} style={{color:'white',textDecoration:'none'}}>Home</Link></div>
           
            <div className='navdiv'><input type='search' placeholder='Search Your Product' onChange={(e)=>setSearch(e.target.value)}></input></div>
            <div className='navdiv'><Link to={'/cart'} style={{color:'white',textDecoration:'none'}}>Cart <sup>{size}</sup></Link></div>
        </article>
    </nav>
    </div>
  )
}

export default Navbar