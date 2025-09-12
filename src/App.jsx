import Header from "./components/Header"
import { ways } from "./data"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
import { useState } from "react"

export default function App() {
  function ButtonClick(onClicks) {
    console.log(ButtonClick);
  }

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
        <button onClick={ButtonClick}>Click</button>
        <button onClick={increment}>Click</button>
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