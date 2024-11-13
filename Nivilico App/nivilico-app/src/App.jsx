import React from 'react';
import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

//Compnents
import PageLayout from './Pages/PageLayout/PageLayout';


//Pages
import Home from './Pages/Home';

///Account Signins
import SignUp from './Pages/AccountPages/SignUp';
import SignIn from './Pages/AccountPages/SignIn';
import ResetPassword from './Pages/AccountPages/ResetPassword';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route element={<PageLayout />} >
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/password-reset' element={<ResetPassword />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
