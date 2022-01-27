import "./index.css"
import Nabar from "./components/layouts/Nabar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Footer from "./components/layouts/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import NoFound from './pages/NoFound'

import { GithubProvider } from "./Context/UsersContext/GithubContext"
function App()
{
    return(
        <GithubProvider>
        <Router>
        <Nabar />
        
        <Routes>
            
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<NoFound />}/>
            <Route path='/*' element={<NoFound />}/>
            </Routes>
        <Footer />
    </Router>
    </GithubProvider>
        
    )
    
}
export default App