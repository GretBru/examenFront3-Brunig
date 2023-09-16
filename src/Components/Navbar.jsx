import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  
  const {state, dispatch} = useContextGlobal()

  const cambiarTema = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    dispatch({ type: newTheme, payload: newTheme });
  }

  return (
    <nav>
        <div className="logo">
          <Link to='/'>
            <h2> <span>DH</span> Odonto</h2>
          </Link>
        </div>
        <div className="links">
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/favs'>Favs</Link>
          <button onClick={cambiarTema} className="btn-theme">
            {state.theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
    </nav>
  )
}

export default Navbar