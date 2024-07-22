import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Layout from './Layout.jsx';
import HeroSection from './routes/HeroSection.jsx';
import RegisterLogin from './routes/RegisterLogin.jsx';


const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'',
        element:<HeroSection/>
      },{
        path:'/Register-Login',
        element:<RegisterLogin/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
