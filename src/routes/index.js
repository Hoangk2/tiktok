import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
  { path: '/@:nickname', component: Profile },
]; // Dùng cho route k cần đăng nhập vẫn xem đc

const privateRoutes = []; // Dùng cho route phải cần đăng nhập vẫn xem đc

export { publicRoutes, privateRoutes };
