// npm packages
import { useEffect, useState } from "react"

// components
import CoffeeCard from "./CoffeeCard"

// helper functions
import { handleActiveSelection } from "./helpers"

const CoffeeMenu = () => {
  const [coffeeList, setCoffeeList] = useState(null)
  const [displayedCoffeeList, setDisplayedCoffeeList] = useState(null)

  const handleFilterSoldOut = (e) => {
    const filteredList = coffeeList.filter(coffee => coffee.available)
    setDisplayedCoffeeList(filteredList)
    handleActiveSelection(e)
  }

  const handleShowAllCoffee = (e) => {
    if (displayedCoffeeList !== coffeeList) {
      setDisplayedCoffeeList(coffeeList)
      handleActiveSelection(e)
    }
  }

  useEffect(() => {
    async function fetchCoffeeData() {
      const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      const coffeeData = await response.json()
      setCoffeeList(coffeeData)
      setDisplayedCoffeeList(coffeeData)
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
          <button className="btn active all-coffee" onClick={handleShowAllCoffee}>All Products</button>
          <button className="btn filtered-coffee" onClick={handleFilterSoldOut}>Available Now</button>
        </div>
      </section>
      <section className="coffee-list">
        {!coffeeList && <h1>Loading coffee...</h1>}
        {displayedCoffeeList && displayedCoffeeList.map(coffee => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </section>
    </div>
  )
}

export default CoffeeMenu
