import './App.css'
import Card from './card'
import data from './data'


export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
       /* {...item}*/
        item={item}
      />
    )
  
  })
  
  return (
    <main>
      {cards}
    </main>
  )
}
