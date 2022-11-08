import React, { useCallback, useState } from 'react'
import Grid from '../layouts/Grid/Grid'

import Button from './Button'

import { Button as ButtonLogic } from '../components/Button';

const Gallery = () => {
  const [buttonState, setButtonState] = useState('success');
  const handleClick = useCallback(() => setButtonState('warning'), [buttonState])

  return (
    <Grid container={true} backgroundColor='red' spacing={6} columns={4}>
      <Button variant='error'><ButtonLogic handleClick={handleClick} name='pepe'></ButtonLogic></Button>
      <Button variant={buttonState}>Success</Button>
      <Button variant='warning'>Warning</Button>
      <Button>Info</Button>
    </Grid>
  )
}

export default Gallery