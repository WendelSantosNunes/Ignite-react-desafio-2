import IllustrationImg from '../../assets/Illustration.svg'
import { ContainerComfirme } from './styles'
import { MapPinLine, CurrencyDollar, Timer } from 'phosphor-react'

export function Success() {
  return (
    <ContainerComfirme>
      <div className="container">
        <h3>Uhu! Pedido confirmado</h3>
        <p className="subTitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="info">
          <div>
            <div className="location">
              <MapPinLine weight="fill" size={32} />
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </p>
            </div>

            <div className="time">
              <Timer weight="fill" size={32} />
              <p>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </p>
            </div>

            <div className="dolar">
              <CurrencyDollar size={32} />
              <p>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </div>
          <img src={IllustrationImg} alt="Ilustração" />
        </div>
      </div>
    </ContainerComfirme>
  )
}
