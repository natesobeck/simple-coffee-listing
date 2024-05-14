const CoffeeCard = ({ coffee }) => {
  return (  
    <div className="coffee-card">
      {coffee.popular ? <div className="popular">Popular</div> : ""}
      <img src={coffee.image} alt={coffee.name} className="coffee-img"/>
      <div className="name-price-container">
        <h3 className="coffee-name">{coffee.name}</h3>
        <div className="price">
          {coffee.price}
        </div>
      </div>
      <div className="ratings-container">
        <img src={coffee.rating ? "/Star_fill.svg" : "/Star.svg"} alt="" />
        <span className="coffee-rating">{coffee.rating ? coffee.rating : ""}</span>
        <span className="coffee-votes">{coffee.rating ? `(${coffee.votes} votes)` : "No Ratings"}</span>
        <span className="available">{coffee.available ? '' : 'Sold out'}</span>
      </div>
    </div>
  )
}

export default CoffeeCard