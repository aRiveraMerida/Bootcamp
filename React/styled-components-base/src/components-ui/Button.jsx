import React, { useMemo } from 'react'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

const getStylesFromVariant = (theme, variant = 'default') => ({
  outline: 'none',
  cursor: variant ? 'pointer' : 'default',
  margin: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  '& > *': {
    fontFamily: 'SemiBold',
    letterSpacing: theme.spacing(0.15),
    fontSize: theme.spacing(1.5),
  },
  backgroundColor: variant === 'error' ? theme.palette.feedback.error.main :
    variant === 'success' ? theme.palette.feedback.success.main :
      variant === 'warning' ? theme.palette.feedback.warning.main :
        theme.palette.feedback.info.main,
  color: theme.palette.text.high,
  border: `1px solid ${theme.palette.gradient.brand}`,
  '&:hover': {
    backgroundColor: theme.palette.background.low,
  }
});


const PROPS_SHOULD_BE_HIDDEN = ['variant'];

const ButtonWrapper = styled('button', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})(({ variant }) => ({
  ...variant,
}));

const Button = ({ children, variant = 'default' }) => {
  const theme = useTheme();
  const variantMemo = useMemo(
    () => getStylesFromVariant(theme, variant),
    [theme, variant]
  );
  return (
    <ButtonWrapper variant={variantMemo}>{children}</ButtonWrapper>
  )
}

export default Button