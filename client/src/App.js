import './App.css';
import {createBrowserRouter,RouterProvider,Route, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePage from './pages/SinglePage';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss'



const router = createBrowserRouter(
  [
  {
    path: "/",
    element:(<div>  
      <Navbar/>
       <Home/>
       <Footer/>
    </div>),
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/post/:id",
    element:(<div>  
      <Navbar/>
       <SinglePage/>
       <Footer/>
    </div>),
  },
  {
    path: "/write",
    element:(<div>  
      <Navbar/>
       <Write/>
       <Footer/>
    </div>),
  },
]
);

function App() {   
  return (
   <div className='app'>
    <div className='container'>
     <RouterProvider router={router}/>            
     </div>
   </div>
  );
}

export default App;
