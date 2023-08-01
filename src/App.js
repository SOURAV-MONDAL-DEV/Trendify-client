import { Toaster } from 'react-hot-toast';
import { Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import router from './Routes/Routes';
import NavBar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="myfont">
      <RouterProvider router={router} ></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;


// #222540
