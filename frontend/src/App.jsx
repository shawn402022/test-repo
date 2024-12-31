import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../src/Layout';
import SpotsIndex from './components/SpotsIndex/SpotsIndex';
import SpotDetails from './components/SpotDetails/SpotDetails';
import ManageSpots from './components/ManageSpots/ManageSpots';
import CreateSpot from './components/CreateSpot/CreateSpot';
import EditSpot from './components/EditSpot/EditSpot';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SpotsIndex />,
      },
      {
        path: '/spots/current',
        element: <ManageSpots />,
      },
      {
        path: '/spots/:spotId',
        element: <SpotDetails />,
      },
      {
        path: '/spots/new',
        element: <CreateSpot />,
      },
      {
        path: '/spots/:spotId/edit',
        element: <EditSpot />,
      },
      {
        path: '*',
        element: <SpotsIndex />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
