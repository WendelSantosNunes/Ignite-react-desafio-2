import {
  CheckoutConfirmationContainer,
  CheckoutContainer,
  CheckoutDataContainer,
} from './styled'
import { useForm } from 'react-hook-form'
import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
  Trash,
  Plus,
  Minus,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import CoffeeImg from '../../assets/Chocolate Quente.png'

export function Checkout() {
  // handleSubmit vai enviar o dado
  // register é função que da nome aos inputs
  // watch monitora uma determinado estado
  const { register, handleSubmit } = useForm()

  function handleSubmitList(data: any) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSubmitList)}>
        <CheckoutDataContainer>
          <h2>Complete seu pedido</h2>

          <div className="checkoutInf">
            <div className="inf">
              <MapPin size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <input
              type="number"
              placeholder="CEP"
              className="zipCode"
              {...register('zipCode')}
              required
            />
            <input
              type="text"
              placeholder="Rua"
              className="road"
              {...register('road')}
              required
            />
            <div>
              <input
                type="number"
                placeholder="Número"
                className="houseNumber"
                {...register('houseNumber')}
                required
              />
              <input
                type="text"
                placeholder="Complemento"
                className="complement"
                {...register('complement')}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                className="district"
                {...register('district')}
                required
              />
              <input
                type="text"
                placeholder="Cidade"
                className="city"
                {...register('city')}
                required
              />
              <input
                type="text"
                placeholder="UF"
                className="uf"
                {...register('UF')}
                required
              />
            </div>
          </div>

          <div className="checkoutPayment">
            <div className="inf">
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="payment">
              <div>
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </div>
              <div>
                <Bank size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </div>
              <div>
                <Money size={16} />
                <p>DINHERO</p>
              </div>
            </div>
          </div>
        </CheckoutDataContainer>
        <CheckoutConfirmationContainer>
          <h2>Cafés selecionados</h2>
          <div>
            <div className="items">
              <div className="itemsDate">
                <img src={CoffeeImg} alt="" />
                <div>
                  <div className="buttonItem">
                    <p>Expresso Tradicional</p>
                    <div className="itemStatus">
                      <div>
                        <button>
                          <Minus size={14} />
                        </button>
                        <p className="ItemNumber">1</p>
                        <button>
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="remover">
                        <Trash size={14} />
                        <p>REMOVER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <strong>R$ 9,90</strong>
            </div>

            <div>
              <div className="itemDonay">
                <div>
                  <p>Total de itens</p>
                  <p>Entrega</p>
                  <strong>Total</strong>
                </div>
                <div>
                  <p>R$ 29,70</p>
                  <p>R$ 3,50</p>
                  <strong>R$ 33,20</strong>
                </div>
              </div>
              <NavLink to="/success" end title="Success">
                <input type="submit" value="CONFIRMAR PEDIDO" />
              </NavLink>
            </div>
          </div>
        </CheckoutConfirmationContainer>
      </form>
    </CheckoutContainer>
  )
}
