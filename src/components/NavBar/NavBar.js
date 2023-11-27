import "bulma/css/bulma.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom';
import LogoImg from "../../img/logo.png";

const NavBar = () => {

    return (

        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/'>
                    <img src={LogoImg} alt="Logo" width={120} />
                </Link>
                <a href="/#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start my-auto">
                    <NavLink to={`/category/procesadores`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                        <button className="button is-primary is-outlined mx-4">Procesadores</button>
                    </NavLink>
                    <NavLink to={`/category/graficas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                        <button className="button is-primary is-outlined mx-4">Graficas</button>
                    </NavLink>
                    <NavLink to={`/category/perifericos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>
                        <button className="button is-primary is-outlined mx-4">Perifericos</button>
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="/#" className="button is-light">
                                <CartWidget />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )

}


export default NavBar;