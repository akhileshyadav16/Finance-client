import Navbar from "./component/Navbar"
import { Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
