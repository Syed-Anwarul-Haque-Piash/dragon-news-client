import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import GoogleLogin from './components/GoogleLogin/GoogleLogin';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/login",
//         element: <Login></Login>
//       },
//       {
//         path: "/register",
//         element: <Register></Register>
//       },
//       {
//         path:"/google",
//         element: <GoogleLogin></GoogleLogin>
//       }
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
