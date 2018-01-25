const REQUEST_FACT = 'chuck-norris/REQUEST_FACT';
const RECEIVE_FACT = 'chuck-norris/RECEIVE_FACT';
const ERROR_FACT = 'chuck-norris/ERROR_FACT';

const defaultState = {
  text: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_FACT:
      return { ...state, text: 'loading...' };
    case RECEIVE_FACT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export const requestList = () => ({ type: REQUEST_FACT });

export const factSuccess = factData => ({ type: RECEIVE_FACT, payload: factData.value });

export const factError = errData => ({ type: ERROR_FACT, data: errData });

export const fetchFact = () => (
  (dispatch, getState) => {
    dispatch(requestList());
    fetch(`https://api.chucknorris.io/jokes/random?category=${getState().categories.theme}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Wrong status code');
        }
        return res.json();
      })
      .then((res) => {
        dispatch(factSuccess(res));
      })
      .catch((err) => {
        dispatch(factError(err));
      });
  }
);
