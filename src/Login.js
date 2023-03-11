import { useState } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
  };

  const onSubmitHander = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  return (
    <div>
      <form onSubmit={onSubmitHander} className={classes[`login-container`]}>
        <div className={classes[`login-info`]}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes[`login-info`]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <button type="submit" className={classes["login-btn"]}>
            Login
          </button>
        </div>
      </form>
      <div className={classes.note}>
        <p>
          <strong>Note: </strong>To add a task for this version, you can click
          the login button and access the task list.
        </p>
      </div>
    </div>
  );
};

export default Login;
