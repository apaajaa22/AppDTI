const mainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  blue1: '#4982C1',
  blue2: '#005690',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  third: mainColors.grey2,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.blue1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  cardBlue: mainColors.blue1,
  cardBlue2: mainColors.blue2,
};
