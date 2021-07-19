import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#FFFFFF',
  gray: '#dddddd',
  darkGray: '#A9A9A9',

  red: '#ff2d54',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.gray,
    mainForeground: palette.black,
    skeletonBackground: palette.white,
    skeletonHighlight: palette.gray,
    cardPrimaryBackground: palette.white,
    buttonPrimaryBackground: palette.purplePrimary,
    buttonDisabledPrimaryBackground: palette.purpleDark,
    buttonMain: palette.greenPrimary,
    buttonRed: palette.red,
    mainText: palette.black,
    lightText: palette.white,
    borderPrimary: palette.gray,
    skeletonPrimaryBackground: palette.darkGray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'mainText',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'mainText',
    },
    title: {
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 26,
      color: 'mainText',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'mainText',
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: 'lightText',
    },
    defaultButtonLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: 'buttonPrimaryBackground',
    },
    successButtonLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: 'buttonMain',
    },
    dangerButtonLabel: {
      fontSize: 16,
      lineHeight: 24,
      color: 'buttonRed',
    },
  },
  cardVariants: {
    productCard: {
      color: 'cardPrimaryBackground',
    },
  },
});

export type Theme = typeof theme;
export default theme;
