import React, { useState } from "react";
import "./CoffeePage.css";
import CoffeeCustomization from "../components/CoffeeCustomization";

function CoffeePage() {
  const [currency, setCurrency] = useState("USD");
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [sugarAmount, setSugarAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCoffees, setSelectedCoffees] = useState([]);
  const [showTotalValue, setShowTotalValue] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const coffeeData = [
    {
      img: "./img/cup6.png",
      name: "Espresso",
      price: 5.2,
      description: "A full-flavored, concentrated form of coffee.",
    },
    {
      img: "./img/cup3.jpg",
      name: "Latte",
      price: 7.5,
      description: "A coffee drink made with espresso and steamed milk.",
    },
    {
      img: "./img/cup4.jpg",
      name: "Cappuccino",
      price: 6.0,
      description: "An espresso-based coffee drink with steamed milk foam.",
    },
    {
      img: "./img/cup5.png",
      name: "Americano",
      price: 5.3,
      description:
        "Espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee.",
    },
    {
      img: "./img/cup.jpg",
      name: "Mocha",
      price: 7.0,
      description: "A chocolate-flavored variant of a latte.",
    },
    {
      img: "./img/cup7.jpg",
      name: "Macchiato",
      price: 5.75,
      description:
        "An espresso coffee drink with a small amount of milk, usually foamed.",
    },
  ];

  const convertPrice = (priceInLari) => {
    return currency === "USD"
      ? (priceInLari / 2.7).toFixed(2)
      : priceInLari.toFixed(2);
  };

  const handleCurrencyChange = () => {
    setCurrency(currency === "USD" ? "GEL" : "USD");
  };

  const handleSelect = (coffee) => {
    setSelectedCoffee(coffee);
    setShowTitle(false);
  };

  const handleCloseCustomization = () => {
    setSelectedCoffee(null);
  };

  const handleConfirm = (sugarAmount, coffeePrice) => {
    setSugarAmount((prevSugarAmount) => prevSugarAmount + sugarAmount);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + coffeePrice);

    setSelectedCoffees((prevSelectedCoffees) => [
      ...prevSelectedCoffees,
      { ...selectedCoffee, sugarAmount },
    ]);
    setSelectedCoffee(null);
    setShowTitle(false);
  };

  const handleShowTotalValue = () => {
    setShowTotalValue(true);
  };

  const handleCloseTotalValue = () => {
    setShowTotalValue(false);
  };

  const handleClearAll = () => {
    setCurrency("USD");
    setSelectedCoffee(null);
    setSugarAmount(0);
    setTotalPrice(0);
    setSelectedCoffees([]);
    setShowTotalValue(false);
    setShowTitle(false);
  };

  return (
    <div className="coffee-page">
      <nav>
        <button onClick={handleCurrencyChange}>
          {currency === "USD" ? "$" : "₾"}
        </button>
      </nav>
      <menu>
        <button>Add New</button>
        <button onClick={handleClearAll}>Clear All</button>
      </menu>
      <div className="coffee-container1">
        {coffeeData.map((coffee) => (
          <div className="coffee-item" key={coffee.name}>
            <img src={coffee.img} alt={coffee.name} />
            <h3>{coffee.name}</h3>
            <div className="info">
              <p>
                Price: {currency === "USD" ? "$" : "₾"}
                {convertPrice(coffee.price)}
              </p>
              <button onClick={() => handleSelect(coffee)}>Select</button>
            </div>
          </div>
        ))}
      </div>
      {showTitle && <h1>Choose Your Coffee</h1>}{" "}
      <div className="selector">
        {selectedCoffee && (
          <>
            <CoffeeCustomization
              coffee={selectedCoffee}
              onClose={handleCloseCustomization}
              onConfirm={handleConfirm}
            />
            <div className="selected-coffee-display">
              <div className="center">
                <img
                  className="img"
                  src={selectedCoffee.img}
                  alt={selectedCoffee.name}
                />
                <p>{selectedCoffee.description}</p>
              </div>
            </div>
          </>
        )}
        {selectedCoffees.length > 0 && (
          <button className="total-value-button" onClick={handleShowTotalValue}>
            Show Total Value
          </button>
        )}
        {showTotalValue && (
          <div className="total-value-popup">
            <div className="total-value-content">
              <p>
                Total cost: {currency === "USD" ? "$" : "₾"}
                {totalPrice.toFixed(2)}
              </p>
              <button onClick={handleCloseTotalValue}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeePage;
