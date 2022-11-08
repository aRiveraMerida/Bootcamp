import styled from '@emotion/styled'

import LayoutMain from './LayoutMain'

const PageContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})


const LayoutFullWidht = ({ children }) => {
  return (
    <LayoutMain>
      <PageContent>{children}</PageContent>
    </LayoutMain>
  )
}

export default LayoutFullWidht