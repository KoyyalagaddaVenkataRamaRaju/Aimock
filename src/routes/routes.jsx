import DashBoard from "../pages/DashBoard/DashBoard"
import Home from "../pages/Home/Home"
import Register from "../pages/Login/Register"
import Signin from "../pages/Login/Signin"
import MockInt from "../pages/MockInt/MockInt"
import MockTest from "../pages/MockTest/MockTest"


export const routes = [
    {path:'/home',element:<Home/>},
    {path:'/',element:<Register />},
    {path:'/login',element:<Signin />},
    {path:'/MockInterviews',element:<MockInt/>},
    {path:'/MockTests',element:<MockTest/>},
    {path:'/dashboard',element:<DashBoard/>},
  ]