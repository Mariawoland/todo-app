import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./main";

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const username = useRef()
  const password = useRef()
  const getUsername = localStorage.getItem("username")
  const getPassword = localStorage.getItem("password")
  const handleSubmit = () => {
    if (username.current.value == "admin" && password.current.value == "12345678") {
      localStorage.setItem("username", "admin")
      localStorage.setItem("password", "12345678")
    }
  }

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        {
          getUsername && getPassword ?
            <Main /> :
            <div className="col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
              <form onSubmit={handleSubmit} className={`${windowWidth >= 600 ? "w-50" : 'w-100'
                } d-flex flex-column justify-center gap-2 align-items-center`}>
                <h1 className="pb-4 text-warning">Log In</h1>
                <input type="text" placeholder="Enter Your Username..." className="form-control bg-light  text-warning-emphasis w-100" ref={username} />
                <input type="password" placeholder="Enter Your Password..." className="form-control bg-light text-warning-emphasis w-100" ref={password} />
                <button className="form-control btn btn-warning w-100 text-dark">Login</button>
                <p className="text-warning py-2">Forgot password? Username - admin, Password - 12345678</p>
              </form>
            </div>
        }

      </div>

    </div>
  );
}
export default App;