const CoffeeMenu = () => {
  return (  
    <div>
      <section className="menu-header">
        <h1 className="header-text">Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="btn-container">
          <button>All Products</button>
          <button>Available Now</button>
        </div>
      </section>
      <section className="coffee-list">
        <h1>map through coffees here</h1>
      </section>
    </div>
  )
}

export default CoffeeMenu;