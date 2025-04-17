import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Send from "./pages/Send";
import TransactionStatus from "./pages/TransferSuccessful"
function App() {

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/send" element={<Send/>}/>
    <Route path="/transactionstatus" element={<TransactionStatus/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
