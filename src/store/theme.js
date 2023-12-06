// const set_theme = 'SET_THEME';

const initialState = {
  theme: 'dark',
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { theme: action.payload };
    default:
      return initialState;
  }
}
