import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';


// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Button, Box, ButtonBase, Card, Grid, InputAdornment, OutlinedInput, Popper } from '@mui/material';

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';

// project imports
import Transitions from '../../../../components/ui-component/extended/Transitions';

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';


// ==============================|| SEARCH INPUT ||============================== //

const ButtonsSection = () => {
    const theme = useTheme();
    return (
            <Box pl={16} pr={2}>
                <Button variant='contained' component={RouterLink} to="/design-system">
                    Design Library
                </Button>
            </Box>
    );
};

export default ButtonsSection;
