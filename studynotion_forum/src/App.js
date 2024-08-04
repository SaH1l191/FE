import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup.js";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard.js"
import PrivateRoute from "./Components/PrivateRoute.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route 
        path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}/>

        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>

<Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }/>
       
      </Routes>
    </div>
  );
}

export default App;
