import { Link } from "react-router-dom"

import MenuIcon from '@mui/icons-material/Menu';
import Search from "@mui/icons-material/Search";


const Navbar = () => {
    return (
        <div>
            <nav class="grey darken-4">
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo">LCKV</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> <MenuIcon /> </i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link>Contatos</Link></li>
                        <li><Link>Sobre mim</Link></li>
                        <li><form>
                            <input type="text" placeholder="Busque algo" /> 
                        </form>
                        </li>
                        <li><i><Search/></i></li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar