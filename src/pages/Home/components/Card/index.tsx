import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { CardContainer, CoffeeImg, CoffeeInf, CoffeePrice } from './styles'

interface CoffeeProps {
  img: string
  name: string
  coffeeType: string[]
  description: string
  price: number
}

export function Card({
  img,
  name,
  description,
  price,
  coffeeType,
}: CoffeeProps) {
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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <p>1</p>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <div className="shopping">
            <ShoppingCart size={22} weight="fill" />
          </div>
        </CoffeePrice>
      </CoffeeInf>
    </CardContainer>
  )
}
