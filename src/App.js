import React from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Cups />
      {/* <Footer /> */}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img className="logo" src="./img/logo.png" alt="logo" />
      <nav>
        <ul className="nav-list">
          <li>
            <a className="nav-link" href="Coffee">
              section1
            </a>
          </li>
          <li>
            <a className="nav-link" href="Coffee">
              section2
            </a>
          </li>
          <li>
            <a className="nav-link last-link" href="Coffee">
              section3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Menu() {
  return (
    <section className="section">
      <div className="container">
        <span className="subheading">Top 3 coffees in the world</span>
        <h2 className="heading-secondary">
          Take your daily dose of coffee with us!
        </h2>
      </div>

      <div className="container grid grid--2-cols ">
        <div>
          <p className="number">01</p>
          <h3 className="heading-tertiary">Espresso ☕</h3>
          <p className="description">
            The espresso, also known as a short black, is approximately 1 oz. of
            highly concentrated coffee. Although simple in appearance, it can be
            difficult to master.
          </p>
        </div>

        <div className="step-img-box">
          <img className="step-img" src="./img/Espresso.jpg" alt="Espresso" />
        </div>

        <div className="step-img-box">
          <img
            className="step-img"
            src="./img/Cappuccino.jpg"
            alt="Cappuccino"
          />
        </div>

        <div>
          <p className="number">02</p>
          <h3 className="heading-tertiary">Cappuccino ☕</h3>
          <p className="description">
            This creamy coffee drink is usually consumed at breakfast time in
            Italy and is loved in the United States as well. It is usually
            associated with indulgence and comfort because of its thick foam
            layer and additional flavorings that can be added to it.
          </p>
        </div>

        <div>
          <p className="number">03</p>
          <h3 className="heading-tertiary">Latte ☕</h3>
          <p className="description">
            Cafe lattes are considered an introductory coffee drink since the
            acidity and bitterness of coffee are cut by the amount of milk in
            the beverage. Flavoring syrups are often added to the latte for
            those who enjoy sweeter drinks.
          </p>
        </div>

        <div className="step-img-box">
          <img className="step-img" src="./img/Latte.jpg" alt="Latte" />
        </div>
      </div>
    </section>
  );
}

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
          <img src="./img/cup2.jpg" alt="Coffee 5" />
          <h3>Mocha</h3>
          <p>₾7.00</p>
        </div>
        <div class="coffee-item">
          <img src="" alt="Coffee 6" />
          <h3>Macchiato</h3>
          <p>₾5.75</p>
        </div>
      </div>
    </div>
  );
}
