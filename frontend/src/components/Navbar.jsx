import { Link } from "react-router-dom"

import MenuIcon from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";

import './Navbar.css'
import { deepPurple } from "@mui/material/colors";

const Navbar = () => {
    return (
        <div>
            <nav class="grey darken-4">
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo"><img src={'/logo.png'} alt="" height={65} width={65}/></Link>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"> <MenuIcon /> </i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link>Contatos</Link></li>
                        <li><Link>Sobre mim</Link></li>
                        <li><i><button type="submit" class="search">
                        <Search sx={{ color: deepPurple[50] }}/>
                        </button></i></li>
                        <li><form>
                            <input className="search" type="text" placeholder="Busque algo" /> 
                        </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
/*
const styles = StyleSheet.create({ 
    textInputStyle: {
        color: 'white',
    }
});
*/
export default Navbar