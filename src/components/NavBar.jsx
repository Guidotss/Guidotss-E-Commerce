import 'animate.css'
import CartWidget from './CartWidget'

const NavBar = () => {

  const stylesHeader = {
    display:'flex',
    margin:'auto',
    justifyContent:'space-between'

  }
  const stylesUl = {
    listStyle:'none',
    display:'flex',
    margin:'10px',
    
  }
  const stylesLi = {
    margin:'20px',
    fontSize:'22px',
  
  }

  const parrafo = {
    fontSize:'25px',
    margin:'30px', 
  }
  
  const styleA = {
   textDecoration:'none'
  }

  return (
    <header style={stylesHeader}>
       <p className='animate__animated  animate__backInLeft font-bold' style={parrafo}>E-commerce</p>
      <nav>
        <ul style={stylesUl}>
          <li className='animate__animated animate__backInLeft font-semibold' style={stylesLi}>
            <a href="" style={styleA} className='hover:text-orange-400 duration-300' >Nosotros</a>
          </li>
          <li className='animate__animated animate__backInLeft font-semibold' style={stylesLi}>
            <a href="" style={styleA} className='hover:text-orange-400 duration-300' >Contacto</a>
          </li>
          <li className='animate__animated animate__backInLeft font-semibold' style={stylesLi}>
           <a href="" style={styleA} className='hover:text-orange-400 duration-300'>Productos</a>
          </li>
          <CartWidget/>
        </ul>
      </nav>
    </header>
    
    
  )
}
export default NavBar