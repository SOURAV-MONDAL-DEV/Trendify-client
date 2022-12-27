import { Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import router from './Routes/Routes';
import NavBar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
