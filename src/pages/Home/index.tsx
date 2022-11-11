import { ListContext } from '../../context/ListContext'
import { useContext } from 'react'
import { Intro } from './components/Intro'
import { Card } from './components/Card'
import { MainContainer } from './styles'

export function Home() {
  const items = useContext(ListContext)

  const listItems = items.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        name={item.name}
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
