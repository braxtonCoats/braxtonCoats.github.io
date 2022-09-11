import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from '../../../config';
import Logo from '../../../components/ui-component/Logo';

//braxton logo
import BCDLogo from '../../../assets/images/Logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
