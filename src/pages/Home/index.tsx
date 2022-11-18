import { ListContext } from '../../context/ListContext'
import { useContext } from 'react'
import { Intro } from './components/Intro'
import { Card } from './components/Card'
import { MainContainer } from './styles'

export function Home() {
  const { list } = useContext(ListContext)

  const listItems = list.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        img={item.img}
        name={item.name}
        amount={item.amount}
        coffeeType={item.coffeeType}
        description={item.description}
        price={item.price}
      />
    )
  })

  return (
    <MainContainer>
      <Intro />
      <div className="coffee">
        <h2>Nossos cafés</h2>
      </div>
      <div className="list">
        <div>{listItems}</div>
      </div>
    </MainContainer>
  )
}
