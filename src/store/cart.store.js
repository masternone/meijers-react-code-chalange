export const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        [action.product.code]: {
          ...(state[action.product.code] || action.product),
          quantity: (state[action.product.code]?.quantity || 0) + 1
        }
      };
    case 'UPDATE':
      return {
        ...state,
        [action.code]: {
          ...state[action.code],
          quantity: action.newQuantity
        }
      }
    default:
      throw new Error();
  }
};
