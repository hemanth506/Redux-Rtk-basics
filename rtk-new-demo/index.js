const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;

console.log("🚀 ~ Initial state:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Update state:", store.getState())
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(2));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(10));

// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(1));
// store.dispatch(icecreamActions.restocked(10));

// unsubscribe();
