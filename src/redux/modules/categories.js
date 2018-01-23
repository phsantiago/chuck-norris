const defaultState = {};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case '':
      return { ...state };
    default:
      return state;
  }
}
