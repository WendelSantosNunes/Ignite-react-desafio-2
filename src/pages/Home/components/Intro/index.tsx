import { InfoList, IntroContainer, IntroInfo } from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import CoffeeImg from '../../../../assets/coffee.png'

export function Intro() {
  return (
    <IntroContainer>
      <section className="intro">
        <IntroInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoList>
            <div>
              <li>
                <ShoppingCart size={34.5} weight="fill" />
                <p>Compra simples e segura</p>
              </li>
              <li>
                <Timer size={34.5} weight="fill" />
                <p>Entrega rápida e rastreada</p>
              </li>
            </div>

            <div>
              <li>
                <Package size={34.5} weight="fill" />
                <p>Embalagem mantém o café intacto</p>
              </li>
              <li>
                <Coffee size={34.5} weight="fill" />
                <p>O café chega fresquinho até você</p>
              </li>
            </div>
          </InfoList>
        </IntroInfo>
        <div>
          <img src={CoffeeImg} alt="Imagem de um copo de café" />
        </div>
      </section>
    </IntroContainer>
  )
}
