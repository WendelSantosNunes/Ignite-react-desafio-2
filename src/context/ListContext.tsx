import { createContext, ReactNode, useState } from 'react'

import ExpressoImg from '../assets/Expresso Tradicional.png'
import AmericanoImg from '../assets/Expresso Americano.png'
import CremosoImg from '../assets/Expresso Cremoso.png'
import GeladoImg from '../assets/Expresso Gelado.png'
import CoffeMilkImg from '../assets/Café com Leite.png'
import LatteImg from '../assets/Latte.png'
import CapuccinoImg from '../assets/Capuccino.png'
import MacchiatoImg from '../assets/Macchiato.png'
import MocaccinoImg from '../assets/Mochaccino.png'
import HotChocolate from '../assets/Chocolate Quente.png'
import CubanoImg from '../assets/Cubano.png'
import HavaianoImg from '../assets/Havaiano.png'
import ÁrabeImg from '../assets/Árabe.png'
import IrlandesImg from '../assets/Irlandês.png'

interface CoffeeProps {
  id: number
  img: string
  name: string
  amount: number
  coffeeType: string[]
  description: string
  price: number
}

interface ProjContext {
  list: CoffeeProps[]
  onAddcart: (item: CoffeeProps, action: string) => void
}

export const ListContext = createContext({} as ProjContext)

interface ListContextProviderProps {
  children: ReactNode
}

export function ListContextProvider({ children }: ListContextProviderProps) {
  const items = [
    {
      id: 1,
      img: ExpressoImg,
      name: 'Expresso Tradicional',
      amount: 0,
      coffeeType: ['TRADICIONAL'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      img: AmericanoImg,
      name: 'Expresso Americano',
      amount: 0,
      coffeeType: ['TRADICIONAL'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: 3,
      img: CremosoImg,
      name: 'Expresso Cremoso',
      amount: 0,
      coffeeType: ['TRADICIONAL'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: 4,
      img: GeladoImg,
      name: 'Expresso Gelado',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'GELADO'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: 5,
      img: CoffeMilkImg,
      name: 'Café com Leite',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'COM LEITE'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 6,
      img: LatteImg,
      name: 'Latte',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'COM LEITE'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: 7,
      img: CapuccinoImg,
      name: 'Capuccino',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'COM LEITE'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: 8,
      img: MacchiatoImg,
      name: 'Macchiato',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'COM LEITE'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: 9,
      img: MocaccinoImg,
      name: 'Mocaccino',
      amount: 0,
      coffeeType: ['TRADICIONAL', 'COM LEITE'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: 10,
      img: HotChocolate,
      name: 'Chocolate Quente',
      amount: 0,
      coffeeType: ['ESPECIAL', 'COM LEITE'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 11,
      img: CubanoImg,
      name: 'Cubano',
      amount: 0,
      coffeeType: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 12,
      img: HavaianoImg,
      name: 'Havaiano',
      amount: 0,
      coffeeType: ['ESPECIAL'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: 13,
      img: ÁrabeImg,
      name: 'Árabe',
      amount: 0,
      coffeeType: ['ESPECIAL'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: 14,
      img: IrlandesImg,
      name: 'Irlandês',
      amount: 0,
      coffeeType: ['ESPECIAL', 'ALCOÓLICO'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
  ]

  const [list, setList] = useState<CoffeeProps[]>(items)

  function onAddcart(item: CoffeeProps, action: String) {
    const newList = list.map(function (valores) {
      if (valores.id === item.id) {
        if (valores.amount >= 0 && action === 'incremento') {
          valores.amount += 1
        } else if (valores.amount > 0 && action === 'decremento') {
          valores.amount -= 1
        }
      }
      return valores
    })
    setList(newList)
  }
  // function init() {}

  // function reducer(state: CoffeeProps, action: string) {
  //   switch (action) {
  //     case 'increment':
  //       state.amount += 1
  //       return { state }
  //     case 'decrement':
  //       state.amount -= 1
  //       return { state }
  //     default:
  //       throw new Error()
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, items, () => {
  //   const storedStateAsJSON = localStorage.getItem(
  //     '@ignite-timer:cycles-state-1.0.0',
  //   )
  //   if (storedStateAsJSON) {
  //     return JSON.parse(storedStateAsJSON)
  //   }
  // })
  // const list = state
  // const onAddcart = dispatch
  return (
    <ListContext.Provider value={{ list, onAddcart }}>
      {children}
    </ListContext.Provider>
  )
}
