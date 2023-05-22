// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'options',
    path: '/dashboard/options',
    icon: icon('ic_user'),
  },
  {
    title: 'simulation market',
    path: '/dashboard/simulation',
    icon: icon('ic_user'),
  },
 
];

export default navConfig;
