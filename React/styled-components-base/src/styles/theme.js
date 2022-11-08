import { lighten, darken } from './colorManipulator'
import { spacing } from './utils'

// Puntos de ruptura de pantallas
export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
}

// Name + referencia respecto a la base
export const ZINDEX = {
  base: 100,
  base100: 200,
  base200: 300,
  base300: 400,
  base400: 500,
}

// Este es el coeficiente de color para hacer una versión más clara o oscura
const COLOR_OFFSETTINGS = 0.3;

const BRAND_COLORS = {
  primary: '#39383b',
  secondary: '#fffdff',
  tertiary: '#6985ea'
}

const FEEDBACK_COLORS = {
  info: '#0090e0',
  success: '#34c240',
  warning: '#fa9f47',
  error: '#d64242'
}

const BACKGROUND_COLORS = {
  primary: '#39383b',
  secondary: '#fffdff',
  tertiary: '#6985ea'
}


const TEXT_COLORS = {
  primary: '#39383b',
  secondary: '#fffdff',
  tertiary: '#6985ea'
}

const theme = {
  palette: {
    brand: {
      primary: {
        main: BRAND_COLORS.primary,
        light: lighten(BRAND_COLORS.primary, COLOR_OFFSETTINGS),
        dark: darken(BRAND_COLORS.primary, COLOR_OFFSETTINGS),
      },
      secondary: {
        main: BRAND_COLORS.secondary,
        light: lighten(BRAND_COLORS.secondary, COLOR_OFFSETTINGS),
        dark: darken(BRAND_COLORS.secondary, COLOR_OFFSETTINGS),
      },
      tertiary: {
        main: BRAND_COLORS.tertiary,
        light: lighten(BRAND_COLORS.tertiary, COLOR_OFFSETTINGS),
        dark: darken(BRAND_COLORS.tertiary, COLOR_OFFSETTINGS),
      }
    },
    feedback: {
      info: {
        main: FEEDBACK_COLORS.info,
        light: lighten(FEEDBACK_COLORS.info, COLOR_OFFSETTINGS),
        dark: darken(FEEDBACK_COLORS.info, COLOR_OFFSETTINGS),
      },
      success: {
        main: FEEDBACK_COLORS.success,
        light: lighten(FEEDBACK_COLORS.success, COLOR_OFFSETTINGS),
        dark: darken(FEEDBACK_COLORS.success, COLOR_OFFSETTINGS),
      },
      warning: {
        main: FEEDBACK_COLORS.warning,
        light: lighten(FEEDBACK_COLORS.warning, COLOR_OFFSETTINGS),
        dark: darken(FEEDBACK_COLORS.warning, COLOR_OFFSETTINGS),
      },
      error: {
        main: FEEDBACK_COLORS.error,
        light: lighten(FEEDBACK_COLORS.error, COLOR_OFFSETTINGS),
        dark: darken(FEEDBACK_COLORS.error, COLOR_OFFSETTINGS),
      },
    },
    background: {
      high: BACKGROUND_COLORS.primary,
      medium: BACKGROUND_COLORS.secondary,
      low: BACKGROUND_COLORS.tertiary
    },
    text: {
      high: TEXT_COLORS.primary,
      medium: TEXT_COLORS.secondary,
      low: TEXT_COLORS.tertiary
    },
    gradient: {
      brand: 'linear-gradient(277.55deg, rgba(57, 56, 59, 1) 0%, rgba(105, 133, 234, 1)100%)',
      info: 'linear-gradient(277.55deg, rgba(57, 56, 59, 1) 0%, rgba(105, 133, 234, 1)100%)',
      success: 'linear-gradient(277.55deg, rgba(57, 56, 59, 1) 0%, rgba(105, 133, 234, 1)100%)',
      warning: 'linear-gradient(277.55deg, rgba(57, 56, 59, 1) 0%, rgba(105, 133, 234, 1)100%)',
      error: 'linear-gradient(277.55deg, rgba(57, 56, 59, 1) 0%, rgba(105, 133, 234, 1)100%)'
    }
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
    }
  },
  spacing
}


export default theme