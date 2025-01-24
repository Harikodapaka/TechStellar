import { IconUserSquareRounded, IconLogin2, IconDeviceImacCog, IconUserPlus, IconHome2, IconBriefcase } from '@tabler/icons-react';


export const links = [
  { link: '/', label: 'Home', icon: IconHome2 },
  { link: '/services', label: 'Services', icon: IconDeviceImacCog },
  { link: '/contact', label: 'Contact', icon: IconUserSquareRounded },
  { link: '/careers', label: 'Careers', icon: IconBriefcase },
  {
    link: '#1',
    label: 'Account',
    icon: IconHome2,
    links: [
      { link: '/login', label: 'Login', icon: IconLogin2 },
      { link: '/signup', label: 'Sign up', icon: IconUserPlus },
    ],
  },
];