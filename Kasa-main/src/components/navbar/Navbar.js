// Importation des fichiers CSS
import './navbar.scss'

// Importation de la méthode Link du module react-router-dom
import { Link } from 'react-router-dom'

// Déclaration de la fonction Navbar
export default function Navbar() {

    // Récupération du chemin de la route actuelle
    const currentRoute = window.location.pathname;

    // Rendu du composant
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                {/* Item Accueil de la barre de navigation */}
                <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/Kasa/'>
                        Accueil
                    </Link>
                </li>
                {/* Item A propos de la barre de navigation */}
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
