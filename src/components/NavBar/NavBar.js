import "bulma/css/bulma.css";
import CartWidget from "../CartWidget/CartWidget";
import LogoImg from "../../img/logo.png";

const NavBar = () => {

    return (

        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="my-auto" href="index.hml">
                    <img src={LogoImg} width={120} />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start my-auto">
                    <button class="button is-black has-text-primary">Procesadores</button>
                    <button class="button is-black has-text-primary">Graficas</button>
                    <button class="button is-black has-text-primary">Perifericos</button>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light">
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