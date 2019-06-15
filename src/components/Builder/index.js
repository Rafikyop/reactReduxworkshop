import React, { Component } from "react";
import Burger from "../Burger";
import ControlPanel from "../ControlPanel";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// Actions
const confirmBurger = total => ({
  type: 'addBurger',
  /** Se debe mandar información junto con la acción */
})

/**
 * Ingredients: ["bacon", "salad", "cheese", "meat"]
 */

const prices = {
  bacon: 10,
  salad: 2,
  cheese: 5,
  meat: 20
};

class Builder extends Component {
  state = {
    ingredients: []
  };

  getPrice = () => {
    const pricesArray = this.state.ingredients.map(ingredient => {
      return prices[ingredient];
    });
    const price = pricesArray.reduce((ant, act) => {
      return ant + act;
    }, 0);
    return price;
  };

  addIngredient = idIngrediente => {
    const newIngredients = this.state.ingredients.slice();
    newIngredients.push(idIngrediente);
    this.setState({ ingredients: newIngredients });
  };

  removeIngredient = index => {
    console.log(index);
    const newIngredients = this.state.ingredients.slice();
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  };

  handleConfirm = () => {
    this.props.confirmBurger(/** Parámetro faltante */)
    this.setState({ ingredients: [] });
  }

  render() {
    return (
      <div className="container">
        <ControlPanel
          onAdd={x => {
            this.addIngredient(x);
          }}
        />
        <Burger
          ingredients={this.state.ingredients}
          onIngredientClick={index => this.removeIngredient(index)}
        />
        <h1>$ {this.getPrice()}</h1>
        <div 
          className="button"
          onClick={() => this.handleConfirm()}>
            Confirm
        </div>
        <Link to="/receipt">
          <div className="button">See receipt</div>
        </Link>
        <h3># Burgers: {this.props.burgersArray.length}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  burgersArray: state,
});

export default connect(mapStateToProps , {confirmBurger})(Builder);