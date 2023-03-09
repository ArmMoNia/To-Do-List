import { useState, useEffect } from "react";
// import classes from "./App.module.css";
import Header from "./Header";
import Login from "./Login";
import Todo from "./Todo";
import Logout from "./Logout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logInHandler = () => {
    // Check valid email and password
    localStorage.setItem("isLoggedIn", "1");
    console.log(isLoggedIn);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {<Header />}
      {!isLoggedIn && <Login onLogin={logInHandler} />}
      {isLoggedIn && <Logout onLogout={logoutHandler} />}
      {isLoggedIn && <Todo />}
    </div>
  );
};

export default App;
