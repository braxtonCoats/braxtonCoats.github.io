import PropTypes from 'prop-types';
import * as React from 'react';


// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, ButtonBase, Switch } from '@mui/material';

// project imports
import LogoSection from '../../DSLayout/LogoSection';
//import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import ThemeSwitch from './ButtonsSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //


const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    return (
        <>
            {/* nav expander and logo */}
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                {/** Nav expand and collapse */}
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>

                {/** logo section */}
                <Box component="span" sx={{ pl: 2, pr: 2, display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                
            </Box>

            {/* header */}
            <Box sx={{ flexGrow: 1 }} />        

            {/** Theme switcher not functional
            <ThemeSwitch />
            */}

            
            {/* notification & profile */}
            {/* <NotificationSection /> */}
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;