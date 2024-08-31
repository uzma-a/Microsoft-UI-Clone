import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Microsoft from './Pages/Microsoft'
import MicrosoftCategory from './Pages/MicrosoftCategory'
import MsApp from './Pages/MsApp'

import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Microsoft/>} />
      <Route path='/microsoft365' element={<MicrosoftCategory/>} />
     
      <Route path='/product' element={<MsApp/>}>
          <Route path=':productId' element={<MsApp/>} />
      </Route>

     
      <Route path='/login' element={<LoginSignup/>} />
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
