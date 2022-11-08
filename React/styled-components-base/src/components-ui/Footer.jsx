import styled from '@emotion/styled'

const FooterWrapper = styled('footer')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3, 0)
}))

const Copyright = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(6),
  color: theme.palette.text.medium,
  fontSize: theme.spacing(1.5),
  fontFamily: 'Italic'
}))


const Footer = ({ children }) => {
  return (
    <FooterWrapper>
      {children}
      <Copyright>© Neoland | Made with 💕</Copyright>
    </FooterWrapper>
  )
}

export default Footer