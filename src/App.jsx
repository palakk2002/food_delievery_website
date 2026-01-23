
import './App.css'
import Home from './pages/Home';
import {ToastContainer} from "react-toastify"
function App() {



  return (
  
    <div className='w-full min-h-screen'>
      <Home/>
      <ToastContainer/>
    </div>
  
  )
}

export default App;