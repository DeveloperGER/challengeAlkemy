import { Link } from 'react-router-dom'
import React from 'react'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary bg-primary fixed-top py-3 mb-4' id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand text-white " to='/'>Inicio</Link>
                <button className="navbar-toggler navbar-toggler-right " type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon text-white "></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item "><Link className="nav-link text-white " to='/records'>Ver Registros</Link></li>
                        <li className="nav-item "><Link className="nav-link text-white " to='/add'>Agregar Registros</Link></li>
                        <li className="nav-item "><Link className="nav-link text-white " to='/panel'>Panel de Control</Link></li>  
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
