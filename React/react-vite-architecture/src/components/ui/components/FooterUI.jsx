import styled from '@emotion/styled';

const FooterWrapper = styled('footer')(({ theme }) => ({
  border: `3px solid ${theme.palette.text}`,
  padding: theme.spacing(2.5, 0, 1.25),
  textAlign: 'center',
  '& > p': {
    color: theme.palette.text,
    fontSize: theme.spacing(1.5),
    marginTop: theme.spacing(1.25),
  },
  '& > ul': {
    display: 'flex',
    justifyContent: 'center',
    '& li': {
      margin: theme.spacing(1.25),
      cursor: 'pointer',
    },
  },
}));

const FooterUI = ({ children }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

export default FooterUI;