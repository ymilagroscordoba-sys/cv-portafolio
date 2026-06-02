
import {Link} from 'react-router-dom';
export default function Navbar(){return <nav className='navbar navbar-dark p-3' style={{ backgroundColor: '#800000' }}><div className='container'>
<Link className='navbar-brand' to='/'>CV Portfolio</Link>
<div><Link className='text-white me-3' to='/'>Inicio</Link><Link className='text-white me-3' to='/about'>Sobre Mi</Link><Link className='text-white me-3' to='/projects'>Proyectos</Link><Link className='text-white' to='/contact'>Contacto</Link></div>
</div></nav>}
