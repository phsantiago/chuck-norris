const CHOOSE_THEME = 'chuck-norris/CHOOSE_THEME';
const REQUEST_LIST = 'chuck-norris/REQUEST_LIST';
const RECEIVE_LIST = 'chuck-norris/RECEIVE_LIST';
const ERROR_LIST = 'chuck-norris/ERROR_LIST';

const defaultState = {
  list: [],
  theme: '',
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHOOSE_THEME:
      return { ...state, theme: action.theme };
    case RECEIVE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}

export const setTheme = theme => ({ type: CHOOSE_THEME, theme });

export const requestList = () => ({ type: REQUEST_LIST });

export const listSuccess = listData => ({ type: RECEIVE_LIST, payload: listData });

export const listError = errData => ({ type: ERROR_LIST, data: errData });

export const fetchCategories = () => (
  (dispatch) => {
    dispatch(requestList());
    fetch('https://api.chucknorris.io/jokes/categories')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Wrong status code');
        }
        return res.json();
      })
      .then((res) => {
        dispatch(listSuccess(res));
      })
      .catch((err) => {
        dispatch(listError(err));
      });
  }
);
