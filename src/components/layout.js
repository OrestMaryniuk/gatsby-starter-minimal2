import React from 'react'
import { Link } from 'gatsby'
import Player from './Player'
import Counter from './Counter'

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/songs">Список пісень</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contacts">Контакти</Link>
      </nav>
      <Counter />
      {children}
      <footer>
        <Player />
      </footer>
    </div>
  )
}

export default Layout