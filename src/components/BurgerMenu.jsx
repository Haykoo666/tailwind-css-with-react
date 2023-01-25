import React from 'react'

const BurgerMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <button className={`${menuOpen ? "active" : "" } burger hidden md:block`} onClick={()=> setMenuOpen(!menuOpen)}>
      <span className="burger-line top-line md:bg-slate-400"></span>
      <span className="burger-line mid-line md:bg-slate-400"></span>
      <span className="burger-line bottom-line md:bg-slate-400"></span>
    </button>
  )
}

export default BurgerMenu