import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import CreateTodo from "./pages/CreateTodo";

function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
   
    <Route path="/create" element={<CreateTodo/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
