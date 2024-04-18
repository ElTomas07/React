import { Logotipo } from '../../UI/Logo/Logotipo'
import { Navbar } from '../../UI/Logo/Navbar/Navbar'

import './Header.css'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logotipo/>
      <Navbar/>
    </header>
  )
}
