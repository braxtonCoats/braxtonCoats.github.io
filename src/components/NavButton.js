import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.primary.onContainer,
  textTransform: 'none',

}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function NavButton(props) {
  return <ButtonRoot {...props} />;
}

export default NavButton;