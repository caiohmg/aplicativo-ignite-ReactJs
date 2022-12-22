import  style from './Header.module.css'

import ignateLogo from '../image/ignate.svg'

export function Header () {
  return (
    <header className={style.header}>
    <img src={ignateLogo} alt="logo da ignate"/>
    </header>
  )
}