import { SHOP_ACTION_TYPES } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    }
    case SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
};

export default shopReducer;
