import { lazy } from 'react';

// project imports
import DSLayout from '../layout/DSLayout';
import Loadable from '../components/ui-component/Loadable';
import HomeLayout from '../layout/HomeLayout';

import HomePage from '../views/HomePage';
import Project1 from '../views/pages/caseStudies/Project1';
import Project2 from '../views/pages/caseStudies/Project2';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: 'case-studies',
            children: [
                {
                    path: 'case-1',
                    element: <Project1 />
                },
                {
                    path: 'case-2',
                    element: <Project2 />
                }
            ]
        },
        {
            path: 'design-system',
            element: <DSLayout />,
            children: [
                {
                    path: 'design-system',
                    element: <HomePage />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
    ],
};

export default MainRoutes;