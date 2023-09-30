const { configureStore, createAsyncThunk } = require("@reduxjs/toolkit");

// createAsyncThunk

const FETCH_USER_REQUEST = "fetchUserRequest";
const FETCH_USER_SUCCESS = "fetchUserSuccess";
const FETCH_USER_FAILURE = "fetchUserFailure";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...satisfies,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: state.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: state.payload,
      };
  }
};

const store = configureStore({ reducer: responseReducer });
