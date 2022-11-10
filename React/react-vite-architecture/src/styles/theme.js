import { spacing } from './utils';

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const ZINDEX = {
  base: 100,
  modal: 200,
  spinner: 300,
};

const PRIMARY_PALETTE = {
  pink: '#ff758f',
};

const SECONDARY_PALETTE = {
  moon: '#999999',
  snow: '#F4F4F4',
  coal: '#333333',
};

const ALERT_PALETTE = {
  error: '#E74C3C',
  success: '#2ECC71',
  warning: '#F1C40F',
};

export const theme = {
  palette: {
    background: SECONDARY_PALETTE.coal,
    title: PRIMARY_PALETTE.pink,
    text: SECONDARY_PALETTE.snow,
    button: {
      background: PRIMARY_PALETTE.pink,
      border: SECONDARY_PALETTE.snow,
      text: SECONDARY_PALETTE.coal,
    },
    alert: {
      error: ALERT_PALETTE.error,
      success: ALERT_PALETTE.success,
      warning: ALERT_PALETTE.warning,
    },
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  typography: {
    fonts: {
      bold: '/fonts/Monserrat/Monserrat-Bold.ttf',
      semibold: '/fonts/Roboto/Roboto-Bold.ttf',
      regular: '/fonts/Roboto/Roboto-Regular.ttf',
      italic: '/fonts/Roboto/Roboto-Italic.ttf',
      light: '/fonts/Roboto/Roboto-Thin.ttf',
    },
  },
  spacing,
};
