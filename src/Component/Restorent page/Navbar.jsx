import React, { useRef } from 'react';
import Logo from './Images/Restrorent logo.jpg'
import cartItem1 from './Images/cartItem1.jpg'
import cartItem2 from './Images/cartItem2.jpg'
import cartItem3 from './Images/cartItem3.jpg'
import cartItem4 from './Images/cartItem4.jpg'
import './Navbar.css'

function Navbar() {
  const searchref = useRef()
  const cartref =useRef()
  const searchHandler = () =>{
    searchref.current.classList.toggle("active")
  }
  const cartHandler =() => {
    cartref.current.classList.toggle("active")
  }

  const cart = [
    {img : cartItem1,},
    {img : cartItem2,},
    {img : cartItem3,},
    {img : cartItem4,},
  ]
    return (
    <>
    <header className='header'>
        <a href="#" className='logo'>
           <img src={Logo} className='logo-img' alt="" /> 
        </a>  
        <nav className='navbar'>
                <a href="#home">Home</a>
                <a href="#About">About</a>
                <a href="#Menu">Menu</a>
                <a href="#Products">Products</a>
                <a href="#Contact">Contact</a>
                <a href="#Blogs">Blogs</a>
        </nav> 

        <div className='icons'>
              <div className='fa fa-search' onClick={searchHandler}></div>
              <div className='fa fa-shopping-cart' onClick={cartHandler}></div>
              <div className='fa ba-bars' id='menu-btn'></div>
        </div>
        <div className='search-form' ref={searchref}>
          <input type="search" placeholder='Search here...' id='search-box' />
          <label htmlFor="search-box" ></label>
        </div>

        <div className='cart-item-container' ref={cartref}>
          {cart.map((item, index)=>(
            <div className='cart-item'>
              <span className='fas fa-times'></span>
              <img src={item.img}/>
              <div className='content'>
                <h3>cart item 01</h3>
                <div className='price'>$15.99</div>
              </div>
            </div>
          ))}
        </div>
    </header> 
    </>
  );
}

export default Navbar;
