import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import DemoRoutes from './DemoRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}