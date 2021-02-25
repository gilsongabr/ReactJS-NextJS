import styled from 'styled-components'
import styles from './navbarFRM.module.css'
import Link from 'next/link'


const NavBar = () => {
    return (
        <nav className={styles.menuhome}>
        <div className="nav-wrapper row black">
          <a href="#!" className="brand-logo"><img src = "/logo.png" alt = "Logo" className={styles.logoimg}/></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down ">
            <li><Link href="/"><a className="yellow-text text-darken-3">Home</a></Link></li>
            <li><Link href="/servicos"><a className="yellow-text text-darken-3">Serviços</a></Link></li>
            <li><Link href="/contato"><a className="yellow-text text-darken-3">Contato</a></Link></li>
            <li><Link href="/login"><a className="waves-effect waves-light btn #f9a825 yellow darken-3 ">Log in</a></Link></li>
          </ul>
        </div>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>

      </nav>
    )
}    

export default NavBar                