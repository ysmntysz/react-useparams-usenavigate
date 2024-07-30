import React from 'react'
import { Link } from "react-router-dom";
import "../assets/default.css"

function Header() {
  return (
    <div className='header-nav'>
      <nav>
        <ul>
            <li>
                <Link to={"/"}>Anasayfa</Link>
            </li>
            <li>
                <Link to={"/products"}>Ürünler</Link>
            </li>
            <li>
                <Link to={"/"}>Hakkımızda</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
