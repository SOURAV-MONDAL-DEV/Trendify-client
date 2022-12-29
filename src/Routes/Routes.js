import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AboutPost from "../Pages/AboutPost/AboutPost";
import Home from "../Pages/Home/Home";
import HomeMid from "../Pages/HomeMid/HomeMid";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Menu from "../Pages/Menu/Menu";
import Message from "../Pages/Message/Message";
import MoreOption from "../Pages/MoreOption/MoreOption";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <HomeMid></HomeMid>
          },
          {
            path: '/media',
            element: <Media></Media>
          },
          {
            path: '/message',
            element: <Message></Message>
          },
          {
            path: '/menu',
            element: <Menu></Menu>
          },
          {
            path: '/aboutPost',
            element: <AboutPost></AboutPost>
          },
          {
            path: '/moreOption',
            element: <MoreOption></MoreOption>
          },
        ]
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },

    ]
  }
]);

export default router;