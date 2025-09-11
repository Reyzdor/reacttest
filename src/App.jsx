import Header from "./components/Header"
import { ways } from "./data"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"

export default function App() {
  function handleClick(ways) {
    console.log('button click')
  }

  return (
    <div>
      <Header />
      <header>
        <h3>Result</h3>

      </header>

      <main>
      <section>
        <ul>
        <WayToTeach title={ways[0].title} description={ways[0].description}/>
        <WayToTeach {... ways[1]} />
        <WayToTeach {... ways[2]} />
        <WayToTeach {... ways[3]} />
        </ul>
      </section>
      <section>
        <h3>Чем мы отличается от других</h3>
        <Button onClick={() => handleClick('title')}>Концентрация</Button>
      </section>
      </main>
    </div>
  )
}