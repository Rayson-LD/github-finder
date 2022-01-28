import "./index.css"
import Nabar from "./components/layouts/Nabar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Footer from "./components/layouts/Footer"
import About from "./pages/About"
import Home from "./pages/Home"
import NoFound from './pages/NoFound'
import { AlertProvider } from "./Context/AlertContext/AlertContext"
import { GithubProvider } from "./Context/UsersContext/GithubContext"
import UserDetail from "./components/users/UserDetail"
function App()
{
    return(
        <GithubProvider>
            <AlertProvider>
        <Router>
        <div className="flex flex-col h-screen justify-between">
        <Nabar />
        
        <Routes>
            
            <Route path='/' element={<Home />}/>
            <Route path='/user/:login' element={<UserDetail/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/' element={<NoFound />}/>
            <Route path='/*' element={<NoFound />}/>
            </Routes>
        <Footer />
        </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
        
    )
    
}
export default App