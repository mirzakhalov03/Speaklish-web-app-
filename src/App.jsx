import { useLocation, useRoutes } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import './index.css'
import RouteController from './router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {

  const location = useLocation()

  const hiddenRoutes = ['profile', ]

  return (
    <>
      {/* <NavBar/> */}
      <RouteController/>
      <ToastContainer/>
    </>
  )
}

export default App
