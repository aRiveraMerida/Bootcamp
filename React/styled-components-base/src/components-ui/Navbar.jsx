import styled from '@emotion/styled'

const NavbarWrapper = styled('nav')(({ theme, direction, justify }) => ({
  display: 'flex',
  flexDirection: direction ? direction : 'row',
  justifyContent: justify,
  padding: theme.spacing(3, 0),
}))




const Navbar = ({ children, direction, justify }) => {
  return (
    <NavbarWrapper direction={direction} justify={justify}>
      {children}
    </NavbarWrapper>
  )
}

export default Navbar