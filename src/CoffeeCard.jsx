const CoffeeCard = ({ coffee }) => {
  return (  
    <div className="coffee-card">
      {coffee.popular ? <div>popular</div> : ""}
      <img src={coffee.image} alt={coffee.name} />
      <div className="name-price-container">
        <h3>{coffee.name}</h3>
        <div className="price">
          {coffee.price}
        </div>
      </div>
      <div className="ratings-container">
        <img src={coffee.rating ? "/Star_fill.svg" : "/Star.svg"} alt="" />
        <span>{coffee.rating ? coffee.rating : ""}</span>
        <span>{coffee.rating ? `(${coffee.votes} votes)` : "No Ratings"}</span>
      </div>
    </div>
  )
}

export default CoffeeCard