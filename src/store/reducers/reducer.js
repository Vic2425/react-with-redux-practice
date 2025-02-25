const initialState = {
  age: 20,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age += action.value;
      // have loading disappears after 5s
      newState.loading = false;
      break;

    case "AGE_DOWN":
      newState.age -= action.value;
      break;
    case "LOADING":
      newState.loading = true;
  }
  return newState;
};

export default reducer;
