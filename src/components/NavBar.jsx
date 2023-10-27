import CartWidget from './CartWidget'
import LogoSVG from '../assets/Logo-SVG.svg'

const NavBar = () => {
  return (
    <div className='shadow-md w-full fixed top-0 left'>
      <div className='flex bg-white py-4 px-7 items-center justify-between'>
          <div className='w-20'>
            <h1>
            <a href="#">
                <img src={LogoSVG} alt="Logo Master Gym Ciudad Victoria svg"/>
            </a>
            </h1>
          </div>
          <div className=''>
            <ul className='flex items-center'>
              <li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Productos</a></li>
              <li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Ofertas</a></li>
              <li className='sm:text-xl sm:mr-8 text-lg mr-5'><a href="#" className='text-gray-800 hover:text-gray-400 duration-500'>Busqueda</a></li>
            </ul>
          </div>
          <div>
            <CartWidget />
          </div>
      </div>
    </div>
  )
}

export default NavBar