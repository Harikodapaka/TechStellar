import { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  Icon,
  IconBriefcase,
  IconDeviceImacCog,
  IconHome2,
  IconProps,
  IconUserSquareRounded,
} from '@tabler/icons-react';

export interface NavLink {
  link: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  label: string;
  links?: Array<NavLink>;
}
export const links: NavLink[] = [
  { link: '/', label: 'Home', icon: IconHome2 },
  { link: '/services', label: 'Services', icon: IconDeviceImacCog },
  { link: '/careers', label: 'Careers', icon: IconBriefcase },
  { link: '/contact', label: 'Contact', icon: IconUserSquareRounded },
  // {
  //   link: '#1',
  //   label: 'Account',
  //   icon: IconHome2,
  //   links: [
  //     { link: '/login', label: 'Login', icon: IconLogin2 },
  //     { link: '/signup', label: 'Sign up', icon: IconUserPlus },
  //   ],
  // },
];
