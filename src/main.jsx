import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Error from './router/Error'
import HotVideos from './router/HotVideos'
import Result, { loader as ResultLoader } from './router/Result'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HotVideos />,
        loader: async ()=>{const res = await axios.get('/mock/hot.json')
        return res.data.items}
      },
      {
        path: '/result',
        element: <Result />,
        loader: ResultLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
