
import './App.css'
import Root from './Root/Root'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='font-["sora",serif] mt-3'>
      <Root />
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App
