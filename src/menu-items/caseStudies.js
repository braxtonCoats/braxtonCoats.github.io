// assets
import { Breadcrumbs } from '@mui/material';
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const caseStudies = {
    id: 'case-studies',
    title: 'Case Studies',
    type: 'group',
    children: [
        {
            id: 'pendo-ll',
            title: 'Pendo Learning Lab',
            type: 'item',
            icon: icons.IconWindmill,
            url: '/case-studies/case-1',
            breadcrumbs: true,

        },
        {
            id: 'bp-design-system',
            title: 'BluePrint Design System',
            type: 'item',
            icon: icons.IconWindmill,
            url: '/case-studies/case-2',
            breadcrumbs: true,
        }
    ]
};

export default caseStudies;
{}