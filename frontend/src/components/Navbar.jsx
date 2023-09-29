import { Link } from "react-router-dom"

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
        <div>
            <nav class="grey darken-4">
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo">LCKV</Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> <MenuIcon/> </i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link>Contatos</Link></li>
                        <li><Link>Sobre mim</Link></li>
                        <li> <Link to="/search"> <SearchIcon/> </Link> </li>
                        
                    </ul>

                    <ul>

                    </ul>
                    
                </div>
            </nav>

        </div>
    );
};

export default Navbar