const palette = {
  colors: {
    navy: '#001F3F',
    blue: '#0074D9',
    aqua: '#7FDBFF',
    teal: '#39CCCC',
    olive: '#3D9970',
    green: '#2ECC40',
    lime: '#01FF70',
    yellow: '#FFDC00',
    orange: '#FF851B',
    red: '#FF4136',
    fuchsia: '#F012BE',
    purple: '#B10DC9',
    maroon: '#85144B',
    white: '#FFFFFF',
    gray: '#AAAAAA',
    silver: '#DDDDDD',
    black: '#111111',
  },
};

const rem = (s) => `${16 * s}px`;

export const baseTheme = {
  sizes: {
    s1: rem(0.5),
    m: rem(1),
    l1: rem(1.5),
  },
};

export const lightTheme = {
  ...baseTheme,
  name: 'light',
  colors: {
    background: palette.colors.silver,
    text: palette.colors.black,
    linktext: palette.colors.blue,
  },
};

export const darkTheme = {
  ...baseTheme,
  name: 'dark',
  colors: {
    background: palette.colors.navy,
    text: palette.colors.silver,
    linktext: palette.colors.yellow,
  },
};
