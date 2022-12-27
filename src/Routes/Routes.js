import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Menu from "../Pages/Menu/Menu";
import Message from "../Pages/Message/Message";

const router = createBrowserRouter([
    {
      path : '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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
       
      ]
    }
  ]);

  export default router;