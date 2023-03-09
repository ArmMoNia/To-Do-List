import classes from "./Mytask.module.css";
import logo from "./recycle-bin.png";

const Mytask = (props) => {
  const clickDelHandler = (index) => {
    props.delTask(index);
  };

  return (
    <div className={classes.allTask}>
      {props.myTask.map((task, index) => (
        <div key={index} className={classes.task}>
          <button
            className={classes.deltask}
            onClick={() => clickDelHandler(index)}
          >
            <img className={classes.deltaskimg} src={logo} alt="Logo" />
          </button>
          <p className={classes.texttask}>{task}</p>
        </div>
      ))}
    </div>
  );
};

export default Mytask;
