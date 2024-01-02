import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';
import DefaultLayout from '../layouts/DefaultLayout';
import DashboardPage from '../pages/DashboardPage';
import PageNotFound from '../components/errors/PageNotFound';
import ListPC from '../components/views/PC/ListPC';
import ListPhone from '../components/views/Phone/ListPhone';
import ListKeyBoard from '../components/views/Keyboard/KeyBoard';
import ListComputerMouse from '../components/views/ComputerMouse/ListComputerMouse';
import ListHeadPhone from '../components/views/HeadPhone/ListHeadPhone';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: '/list&%PC',
        Component: ListPC,
      },
      {
        path: '/listPhone',
        Component: ListPhone,
      },
      {
        path: '/listKeyboard',
        Component: ListKeyBoard,
      },
      {
        path: '/listComputerMouse',
        Component: ListComputerMouse,
      },
      {
        path: '/listheadphone',
        Component: ListHeadPhone,
      },
    ],
  },
  {
    path: '*',
    Component: PageNotFound,
  },
];

const router: Router = createBrowserRouter(routes);

export default router;
