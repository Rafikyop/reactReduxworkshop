import React, { Component } from "react";
import Burger from "../Burger";
import ControlPanel from "../ControlPanel";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
const confirmBurger = (price) => ({
  type: "addBurger",
  price,
});

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

const prices = {
  bacon: 10,
  salad: 2,
  cheese: 5,
  meat: 20,
};

const Builder = () => {
  const state = {
    ingredients: [],
  };

  const getPrice = () => {
    const pricesArray = state.ingredients.map((ingredient) => {
      return prices[ingredient];
    });
    const price = pricesArray.reduce((ant, act) => {
      return ant + act;
    }, 0);
    return price;
  };

  const addIngredient = (idIngrediente) => {
    const newIngredients = this.state.ingredients.slice();
    newIngredients.push(idIngrediente);
    this.setState({ ingredients: newIngredients });
  };

  const removeIngredient = (index) => {
    console.log(index);
    const newIngredients = this.state.ingredients.slice();
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  };

  const handleConfirm = () => {
    this.props.confirmBurger(getPrice());
    this.setState({ ingredients: [] });
  };

  return (
    <div className="container">
      <ControlPanel
        onAdd={(x) => {
          this.addIngredient(x);
        }}
      />
      <h3># Burgers added: {this.props.burgersArray.length}</h3>
      <h2>
        Burger {this.props.burgersArray.length + 1} : $ {this.getPrice()}
      </h2>
      <div className="button" onClick={() => this.handleConfirm()}>
        Confirm
      </div>
      <Link to="/receipt">
        <div className="button">See receipt</div>
      </Link>
      <div className="builder">
        <Burger
          ingredients={this.state.ingredients}
          onIngredientClick={(index) => this.removeIngredient(index)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  burgersArray: state,
});

export default connect(mapStateToProps, { confirmBurger })(Builder);
