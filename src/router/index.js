
import { createBrowserRouter } from 'react-router-dom'
import { Details } from '../components/Details';
import { Table } from '../components/Table';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Table />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  }
]);
