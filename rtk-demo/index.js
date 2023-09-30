const { combineReducers, applyMiddleware } = require("redux");
const { configureStore } = require("@reduxjs/toolkit");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM";

// initial state value
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceScreams: 20,
// };

const cakeInitialState = {
  numberOfCakes: 10,
};

const icecreamInitialState = {
  numberOfIceScreams: 20,
};

// action creators
function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

function RestockCake(quantity = 1) {
  return {
    type: RESTOCK_CAKE,
    payload: quantity,
  };
}

function orderIcecream(quantity = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
}

function RestockIcecream(quantity = 1) {
  return {
    type: RESTOCK_ICECREAM,
    payload: quantity,
  };
}

// selectors
const selectNumberOfCakes = (state) => state.numberOfCakes;
const selectNumberOfIcecream = (state) => state.numberOfIceScreams;

// reducers
const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    case "RESTOCK_CAKE":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numberOfIceScreams: state.numberOfIceScreams - action.payload,
      };
    case "RESTOCK_ICECREAM":
      return {
        ...state,
        numberOfIceScreams: state.numberOfIceScreams + action.payload,
      };
    default:
      return state;
  }
};

// Create a combined reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// create cake store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log("🚀 ~ Initial cake state:", store.getState());

// this executes whenever the state is changed
const unsubscribeCake = store.subscribe(() => {
  // console.log("🚀 ~ Update cake state:", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake(2));
store.dispatch(RestockCake(20));
store.dispatch(orderCake());
store.dispatch(orderCake(2));

store.dispatch(orderIcecream());
store.dispatch(orderIcecream(2));
store.dispatch(RestockIcecream(5));

unsubscribeCake(); // after this statement is executed, the state cannot be changed.

store.dispatch(orderCake(1));
store.dispatch(orderCake(2));
