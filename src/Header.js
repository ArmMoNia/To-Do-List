import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={classes.head}>
        To <span className={classes.headYellow}>Do</span> List.
      </h1>
    </div>
  );
}

export default Header;
