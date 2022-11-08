import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import { CardContainer, CoffeeImg, CoffeeInf, CoffeePrice } from './styles'
import Expresso from '../../../../assets/Expresso.png'

export function Card() {
  return (
    <CardContainer>
      <CoffeeImg className="coffeeImg">
        <img src={Expresso} alt="Cooffee-Express" />
      </CoffeeImg>
      <CoffeeInf className="coffeeInfo">
        <div className="brand">
          <p>Tradicional</p>
        </div>
        <h3>Expresso Tradicional</h3>
        <p className="description">
          O tradicional café feito com água quente e grãos moídos
        </p>
        <CoffeePrice>
          <p className="price">
            R$ <strong>9,90</strong>
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
