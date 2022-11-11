import { HeaderContainer, CartContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import LogoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <NavLink to="/" end title="Home">
            <img src={LogoImg} alt="Logo Marca" />
          </NavLink>
        </div>
        <CartContainer>
          <div>
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre, RS</p>
          </div>
          <NavLink to="/checkout" end title="checkout" className="cart">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CartContainer>
      </HeaderContainer>
    </>
  )
}
