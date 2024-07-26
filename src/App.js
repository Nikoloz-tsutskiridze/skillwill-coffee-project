import React from "react";
import "./index.css";
import logo from "./img/logo.png";
import Espresso from "./img/Espresso.jpg";
import Cappuccino from "./img/Cappuccino.jpg";
import Latte from "./img/Latte.jpg";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      {/* <Footer /> */}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
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
          <img className="step-img" src={Espresso} alt="Espresso" />
        </div>

        <div className="step-img-box">
          <img className="step-img" src={Cappuccino} alt="Cappuccino" />
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
          <img className="step-img" src={Latte} alt="Latte" />
        </div>
      </div>
    </section>
  );
}
