import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Error from './router/Error'
import MostPopular, { loader as MostPopularLoader } from './router/MostPopular'
import Result, { loader as ResultLoader } from './router/Result'
import Watch, { loader as WatchLoader } from './router/Watch'


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <MostPopular />,
        loader: MostPopularLoader(queryClient),
      },
      {
        path: '/results',
        element: <Result />,
        loader: ResultLoader(queryClient),
      },
      {
        path: '/watch',
        element: <Watch />,
        loader: WatchLoader(queryClient),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  // </React.StrictMode>,
)
