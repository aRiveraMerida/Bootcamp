import { Global } from '@emotion/react'


const GlobalStyles = () => {
  return (
    <Global styles={(theme) => [
      {
        "*": {
          fontFamily: "Regular",
          boxSizing: "border-box",
        },
        "html,body": {
          padding: 0,
          margin: 0,
          backgroundColor: theme.palette.background.high,
          color: theme.palette.text.low,
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        ul: {
          listStyle: "none",
          margin: 0,
          padding: 0
        },
        "::-webkit-scrollbar": {
          width: theme.spacing(0.75),
          background: theme.palette.background.medium,
        }
      },
      {
        "@font-face": {
          fontFamily: "Regular",
          src: `url(${theme.typography.fonts.regular}) format("truetype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "Italic",
          src: `url(${theme.typography.fonts.italic}) format("truetype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "Bold",
          src: `url(${theme.typography.fonts.bold}) format("truetype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "SemiBold",
          src: `url(${theme.typography.fonts.semibold}) format("truetype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "Light",
          src: `url(${theme.typography.fonts.light}) format("truetype")`,
        },
      },
    ]} />
  )
}


export default GlobalStyles;