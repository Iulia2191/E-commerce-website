import  { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        <MenuIcon />
       
      </div>
      <div className='center'>
        <Link className='link' to='/'>
          FashioNest
        </Link>
      </div>
      <div className={`right ${menuOpen ? 'menu-open' : ''}`}>
        <div className='icons'>
          <SearchIcon />
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <div className='cartIcon'>
            <ShoppingCartIcon />
            <span>0</span>
          </div>
          
        </div>
      </div>
      <div className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <div className='left'>
          
          <div className='item'>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Children
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Accessories
            </Link>
          </div>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Home
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
          <div className='item'>
            <img src='.\img\flag.jpg' alt='American Flag' />
            <KeyboardArrowDownIcon/>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
