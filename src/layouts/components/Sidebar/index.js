import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import { Menu } from './Menu';
import { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
import SuggestAccount, { SuggestAccountItem } from '~/components/SuggestAccount';
const cx = className.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestAccount label={'suggested accounts'} />
      <SuggestAccount label={'following accounts'} />
    </aside>
  );
}

export default Sidebar;
