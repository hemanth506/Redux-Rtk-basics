const { configureStore } = require("@reduxjs/toolkit");
const produce = require("immer").produce;

const UPDATE_STREET = "UPDATE_STREET";

const initialState = {
  name: "Hemanth",
  address: {
    street: "165E, 2nd block",
    city: "chennai",
    state: "TN",
  },
};

const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STREET":
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = configureStore({ reducer: personalReducer });
console.log("Initial street:", store.getState());
 
store.subscribe(() => {
  console.log("Updated street:", store.getState());
});

store.dispatch(updateStreet("No: 123, S3 appartment"));

// unsubscribe();
