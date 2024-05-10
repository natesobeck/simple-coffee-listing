// npm packages
import { useEffect, useState } from "react"

// components
import CoffeeCard from "./CoffeeCard"

const CoffeeMenu = () => {

  const [coffeeList, setCoffeeList] = useState(null)

  useEffect(() => {
    async function fetchCoffeeData() {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      const coffeeData = await response.json()
      setCoffeeList(coffeeData)
    }
    fetchCoffeeData()
  }, [])


  return (
    <div>
      <section className="menu-header">
        <h1 className="header-text">Our Collection</h1>
        <p className="text">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className="btn-container">
          <button className="btn active">All Products</button>
          <button className="btn">Available Now</button>
        </div>
      </section>
      <section className="coffee-list">
        {!coffeeList && <h1>Loading coffee...</h1>}
        {coffeeList && coffeeList.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </section>
    </div>
  )
}

export default CoffeeMenu
