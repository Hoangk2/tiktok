import routesConfig from '~/config/routes';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

// Public routes
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
  { path: routesConfig.profile, component: Profile },
]; // Dùng cho route k cần đăng nhập vẫn xem đc

const privateRoutes = []; // Dùng cho route phải cần đăng nhập vẫn xem đc

export { publicRoutes, privateRoutes };
