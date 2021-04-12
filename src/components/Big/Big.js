import classes from "./Big.module.css";
const Big = ({ children }) => {
    return (<div>
        <button className={classes.button}>{children}</button>
        </div>);
}


export default Big;