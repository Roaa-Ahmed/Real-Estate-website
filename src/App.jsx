import './App.css'
import Booking from './Components/Booking'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import WhyChooseUs from './Components/WhyChooseUs'
import { RouterProvider } from 'react-router'
import { router } from './router'

function App() {

  return (
    <>
    {/* <Navbar/>
    <Landing/>
    <Features/>
    <WhyChooseUs/>
    <Booking/>
    <Footer/> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
