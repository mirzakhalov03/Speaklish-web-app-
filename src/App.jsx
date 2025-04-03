import { useLocation, useRoutes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import './index.css'
import RouteController from './router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './App.css'
import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function App() {

  useEffect(()=>{
    WebApp.expand()
  }, [])


  return (
    <div className='' style={{
      backgroundColor: WebApp.themeParams.bg_color || "#fff",
      color: WebApp.themeParams.text_color || "#000",
      padding: "20px",
      minHeight: "100vh",
    }}
    >
      <RouteController/>
      <ToastContainer/>
    </div>
  )
}

export default App
