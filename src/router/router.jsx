import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HouseList from '../pages/houseList/HouseList'
import MapView from '../pages/houseMap/HouseMap'
import AcercaDe from '../pages/acercaDe/AcercaDe'
import ErrorPage from '../pages/errorPage/ErrorPage'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HouseList />,
      },
      {
        path: 'map-view',
        element: <MapView />,
      },
      {
        path: 'acerca-de',
        element: <AcercaDe />,
      },
      {
        path: '*',
        element: <p>diudbiu</p>,
      },
    ],
  },
]);

export default router;
