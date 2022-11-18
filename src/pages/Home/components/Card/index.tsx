import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { CardContainer, CoffeeImg, CoffeeInf, CoffeePrice } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ListContext } from '../../../../context/ListContext'

interface CoffeeProps {
  id: number
  img: string
  name: string
  amount: number
  coffeeType: string[]
  description: string
  price: number
}

export function Card({
  id,
  img,
  name,
  description,
  amount,
  price,
  coffeeType,
}: CoffeeProps) {
  const { onAddcart } = useContext(ListContext)

  function AddItem() {
    onAddcart(
      { id, img, name, description, amount, price, coffeeType },
      'incremento',
    )
  }

  function SubItem() {
    onAddcart(
      { id, img, name, description, amount, price, coffeeType },
      'decremento',
    )
  }

  return (
    <CardContainer>
      <CoffeeImg className="coffeeImg">
        <img src={img} alt="Cooffee-Express" />
      </CoffeeImg>
      <CoffeeInf className="coffeeInfo">
        <div className="brand">
          {coffeeType.map((item) => {
            return <p key={item}>{item}</p>
          })}
        </div>
        <h3>{name}</h3>
        <div className="description">
          <p>{description}</p>
        </div>
        <CoffeePrice>
          <p className="price">
            R$ <strong>{price.toFixed(2)}</strong>
          </p>
          <div className="amount">
            <button onClick={SubItem}>
              <Minus size={14} weight="bold" />
            </button>
            <p>{amount}</p>
            <button onClick={AddItem}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <NavLink to="/checkout" end title="checkout" className="cart">
            <div className="shopping">
              <ShoppingCart size={22} weight="fill" />
            </div>
          </NavLink>
        </CoffeePrice>
      </CoffeeInf>
    </CardContainer>
  )
}
