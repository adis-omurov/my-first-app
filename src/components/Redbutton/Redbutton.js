import classes from "./Redbutton.module.css";
const Redbutton = ({children}) => {
    return ( <div>
        <button className={classes.button}>{children}</button>
    </div>)
}
export default Redbutton;