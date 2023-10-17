const defaultState = {
  catImage: {},
  dogImage: "",
};

export const FETCH_DOG = "GET_DOG";
export const SET_DOG = "SET_DOG";

export const FETCH_CAT = "FETCH_CAT";
export const SET_CAT = "SET_CAT";

export const imageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CAT":
      return { ...state, catImage: action.payload[0] };
    case "SET_DOG":
      return { ...state, dogImage: action.payload };
    default:
      return state;
  }
};

export const setCat = (payload) => ({
  type: SET_CAT,
  payload,
});
export const fetchCat = () => ({ type: FETCH_CAT });

export const setDog = (payload) => ({
  type: SET_DOG,
  payload,
});
export const fetchDog = () => ({ type: FETCH_DOG });
