import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';

const AppBarRoot = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.container,

}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function AppBar(props) {
  return <AppBarRoot {...props} />;
}

export default AppBar;