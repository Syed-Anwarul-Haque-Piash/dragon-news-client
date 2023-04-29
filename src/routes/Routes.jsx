import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: "login",
                element:<Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path:"category",
        element:<Main></Main>,
        children: [
            // {
            //     path:"/",
            //     element: <Category></Category>,
            //     loader: ()=>fetch('https://dragon-news-server-syed-anwarul-haque-piash.vercel.app/news')
            // },
            {
                path: ":id",
                element: <Category></Category>,
                loader:({params})=>fetch(`https://dragon-news-server-syed-anwarul-haque-piash.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`https://dragon-news-server-syed-anwarul-haque-piash.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;