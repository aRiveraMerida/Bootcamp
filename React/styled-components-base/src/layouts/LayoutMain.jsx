import styled from '@emotion/styled'
import Footer from '../components-ui/Footer'
import Navbar from '../components-ui/Navbar'


const Container = styled('main')({
  height: '100vh'
})


const Section = styled('section')({
  flexGrow: 1
})


const LayoutMain = ({ children, disabledFooter = false }) => {
  return (
    <Container>
      <Navbar direction={'row'} justify={'space-evenly'}>
        <p>Home 🏠</p>
        <p>Projects 🚀</p>
        <p>About 🙋🏽‍♂️</p>
      </Navbar>
      <Section>{children}</Section>
      {!disabledFooter &&
        <Footer>
          <p>Hola desde Layout Main</p>
        </Footer>
      }
    </Container>
  )
}

export default LayoutMain;