import { Intro } from './components/Intro'
import { Card } from './components/Card'
import { MainContainer } from './styles'

export function Home() {
  const items = [
    {
      id: 1,
      img: {},
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
  ]
  const listItems = items.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        name={item.name}
        description={item.description}
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
        <Card />
      </div>
    </MainContainer>
  )
}
