import "./App.css";
import React, { useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Landingpage } from "./Pages/Landingpage";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Routes/privateRoute";
import Login from "./Pages/Login";

const App = () => {
  const [currpage, setCurrpage] = useState();
  const handleCurrntpage = (incoming) => {
    setCurrpage(incoming);
  };

  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app-container-bnw">
          {/* <Navbar currentpage={currpage} /> */}
          <div className="appcontainer">
            <Routes>
              <Route
                exact
                path="/"
                element={<Landingpage currentpage={handleCurrntpage} />}
              />

              <Route
                exact
                path="/login"
                element={<Login currentpage={handleCurrntpage} />}
              />

              <Route path="/" element={<PrivateRoute />}>
                <Route
                  path="/dashboard"
                  element={<Dashboard currentpage={handleCurrntpage} />}
                />
              </Route>
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Router>
    </Suspense>
  );
};

export default App;
