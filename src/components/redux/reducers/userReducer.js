/* Arreglo de precios finales de cada hamburguesa */

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addBurger":
      /** Se agregan nuevos elementos al arreglo
       * OJO: la acción debe contener una propiedad 'price'
       * que contiene información
       */
      const newState = state.concat([action.price]);
      return newState;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
