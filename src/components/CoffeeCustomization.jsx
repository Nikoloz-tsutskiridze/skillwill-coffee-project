import React, { useState } from "react";

const SUGAR_COST = 0.5;

function CoffeeCustomization({ coffee, onClose, onConfirm }) {
  const [sugarAmount, setSugarAmount] = useState(0);

  const handleConfirm = () => {
    const totalPrice = coffee.price + sugarAmount * SUGAR_COST;
    onConfirm(sugarAmount, totalPrice);
    onClose();
  };

  return (
    <div className="coffee-customization">
      <h2>{coffee.name}</h2>
      <p>Price: {coffee.price}₾</p>
      <label>
        Sugar Amount (cubes):
        <input
          type="number"
          value={sugarAmount}
          onChange={(e) => setSugarAmount(parseInt(e.target.value, 10))}
          min="0"
        />
      </label>
      <p>Total Cost: {(coffee.price + sugarAmount * SUGAR_COST).toFixed(2)}₾</p>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default CoffeeCustomization;
