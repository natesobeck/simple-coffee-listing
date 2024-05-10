// components
import CoffeeMenu from './CoffeeMenu'

// css
import './App.css'

function App() {
  return (
    <main className="main">
      <div className="background">
        <img className="background-img" src="/bg-cafe.jpg" alt="A painting of a lone woman in a pink coat sitting in a coffee bar" />
      </div>
      <section className="menu">
        <CoffeeMenu />
      </section>
    </main>
  )
}

export default App
