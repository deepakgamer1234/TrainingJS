import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import HomePage from './page/home-page/HomePage.component.jsx';
import ShopPage from './page/shop-page/shopPage'
 
const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/shop/:category",
    element:<ShopPage/>
  },
  {
    path:"/about",
    element:<div>About us</div>
  },
   
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
 