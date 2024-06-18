import {Routes, Route} from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import SigninPage from "./pages/SignInPage"
import HomePage from "./pages/HomePage"
import { useEffect, useState } from "react"
import GlobalContext from "./contexts/GlobalContext"


const App = () => {
  const [token, setToken] = useState(false);
  const [open, setOpen] = useState(true);
  

  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  },[]);

  return (
    <GlobalContext.Provider value={{token: token, setToken: setToken, open: open, setOpen:setOpen }}>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
    </GlobalContext.Provider>
  )
}

export default App

