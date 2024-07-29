import React from "react";

function Cups() {
  return (
    <div className="cups-section">
      <h1 className="heading-quaternary">Choose Your Coffee</h1>
      <div class="coffee-container">
        <div class="coffee-item">
          <img src="./img/cup6.png" alt="Coffee 1" />
          <h3>Espresso</h3>
          <p>₾5.20</p>
        </div>
        <div class="coffee-item">
          <img src="./img/cup3.jpg" alt="Coffee 2" />
          <h3>Latte</h3>
          <p>₾7.50</p>
        </div>
        <div class="coffee-item">
          <img src="./img/cup4.jpg" alt="Coffee 3" />
          <h3>Cappuccino</h3>
          <p>₾6.00</p>
        </div>
        <div class="coffee-item">
          <img src="./img/cup5.png" alt="Coffee 4" />
          <h3>Americano</h3>
          <p>₾5.30</p>
        </div>
        <div class="coffee-item">
          <img src="./img/cup.jpg" alt="Coffee 5" />
          <h3>Mocha</h3>
          <p>₾7.00</p>
        </div>
        <div class="coffee-item">
          <img src="./img/cup7.jpg" alt="Coffee 6" />
          <h3>Macchiato</h3>
          <p>₾5.75</p>
        </div>
      </div>
    </div>
  );
}

export default Cups;
