// @flow

 // $FlowFixMe: symbol
const CHANGE_THEME: symbol = Symbol();

const changeTheme = (newTheme: string): {} => {
  return ({
  type: CHANGE_THEME,
  newTheme,
})};

export { CHANGE_THEME, changeTheme };
