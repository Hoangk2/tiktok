import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import Live from '~/pages/Live';

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.live, component: Live },
]; // Dùng cho route k cần đăng nhập vẫn xem đc

const privateRoutes = []; // Dùng cho route phải cần đăng nhập vẫn xem đc

export { publicRoutes, privateRoutes };
