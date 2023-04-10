export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const ageUpAsnc = (value) => {
  return {
    type: "AGE_UP",
    value: value,
  };
};

export const ageUp = (value) => {
  //once the ageUp calls, it will return dispatch
  return (dispatch) => {
    // loading can be called in here
    dispatch(loading());
    //use setTimeout to delay an act, ex: 5000 as 5s
    setTimeout(() => {
      // action.value can be changed in here, ex: add value++ like below, the ageUp button will increase up to 2
      //   value++;
      dispatch(ageUpAsnc(value));
    }, 5000);
  };
};

export const ageDown = (value) => {
  return {
    type: "AGE_DOWN",
    value: value,
  };
};
