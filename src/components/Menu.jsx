import React from "react";

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

export default Menu;
