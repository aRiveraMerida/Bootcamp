import styled from '@emotion/styled';
import React from 'react';

const getSizeStyles = (theme, size) => {
  switch (size) {
    case 'small':
      return {
        fontSize: theme.spacing(1.75),
        fontSizeTablet: theme.spacing(1.75),
        fontSizeDesktop: theme.spacing(2),
      };
    case 'large':
      return {
        fontSize: theme.spacing(2.5),
        fontSizeTablet: theme.spacing(2.75),
        fontSizeDesktop: theme.spacing(3),
      };
    case 'medium':
    default:
      return {
        fontSize: theme.spacing(2),
        fontSizeTablet: theme.spacing(2.25),
        fontSizeDesktop: theme.spacing(2.5),
      };
  }
};

const PROPS_SHOULD_BE_HIDDEN = ['size'];

const TitleWrapper = styled('h1', {
  shouldForwardProp: (prop) => !PROPS_SHOULD_BE_HIDDEN.includes(prop),
})(({ theme, size }) => ({
  color: theme.palette.title,
  fontSize: getSizeStyles(theme, size).fontSize,
  [`${theme.mediaquery.tablet}`]: {
    fontSize: getSizeStyles(theme, size).fontSizeTablet,
  },
  [`${theme.mediaquery.desktop}`]: {
    fontSize: getSizeStyles(theme, size).fontSizeDesktop,
  },
}));

const TitleUI = ({ children, size = 'medium' }) => {
  return <TitleWrapper size={size}>{children}</TitleWrapper>;
};

export default TitleUI;
