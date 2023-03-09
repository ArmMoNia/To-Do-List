import classes from "./Logout.module.css";
const Logout = (props) => {
  return (
    <div className={classes.logout}>
      <button onClick={props.onLogout}>Log out</button>
    </div>
  );
};
export default Logout;
