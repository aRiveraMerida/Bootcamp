import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';

const getBackgroundColor = (theme, variant) => {
  switch (variant) {
    case 'error':
      return theme.palette.alert.error;
    case 'success':
      return theme.palette.alert.success;
    case 'warning':
      return theme.palette.alert.warning;
    default:
      return theme.palette.button.background;
  }
};

const getStylesFromVariant = (theme, variant = 'default') => ({
  outline: 'none',
  cursor: variant ? 'pointer' : 'default',
  margin: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  '& > *': {
    fontFamily: 'SemiBold',
    letterSpacing: 1,
    fontSize: theme.spacing(1.5),
  },
  backgroundColor: getBackgroundColor(theme, variant),
  color: theme.palette.button.text,
  border: `1px solid ${theme.palette.button.border}`,
  '&:hover': {
    backgroundColor: theme.palette.button.border,
  },
});

const PROPS_SHOULD_BE_HIDDEN = ['variant'];

const ButtonWrapper = styled('button', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})(({ variant }) => ({
  ...variant,
}));

const ButtonUI = ({ children, variant = 'default' }) => {
  const theme = useTheme();
  const variantMemo = useMemo(
    () => getStylesFromVariant(theme, variant),
    [theme, variant],
  );
  return <ButtonWrapper variant={variantMemo}>{children}</ButtonWrapper>;
};

export default ButtonUI;
