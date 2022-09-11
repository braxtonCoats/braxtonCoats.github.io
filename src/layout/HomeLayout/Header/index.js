import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, ButtonBase } from '@mui/material';

// project imports
import LogoSection from '../../DSLayout/LogoSection';
//import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import ButtonsSection from './ButtonsSection';

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
                {/** logo section */}
                <Box component="span" sx={{ pl: 2, pr: 2, display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                
            </Box>

            {/* header */}
            <Box sx={{ flexGrow: 1 }} />

            {/** Buttons section */}
            <ButtonsSection />

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
