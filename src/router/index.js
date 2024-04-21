import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import FormDy from '@/components/FormDy';
import FormDyNew from '@/components/FormDyNew';
import FromItemDyNew from '@/components/FromItemDyNew';

const router = createBrowserRouter([
  {
    path:'/',
    element: <FromItemDyNew/>
    // element: <Layout/>
  },
  {
    path: 'login',
    element: <Login />
  }
]);

export default router;