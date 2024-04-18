import './Navbar.css'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <ItemNavbar content='Quienes Somos' style='red'/>
            <ItemNavbar content='Acerca de Nosotros' style='blue'/>
            <ItemNavbar content='FAQ' style='green'/>
        </ul>
    </nav>
  )
}
