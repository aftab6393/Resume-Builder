import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";  
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";  
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Details from "./pages/Details";
import Resume from "./pages/Resume";
import { useSelector } from "react-redux";
import "./App.css";  

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/signin" />;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="container">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<PrivateRoute><Details /></PrivateRoute>} />
            <Route path="/resume" element={<PrivateRoute><Resume /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
