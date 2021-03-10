import classes from "./Seventhmarth.module.css";
const Button = ({ children }) => {
    return (<div>
        <button className={classes.button}>{children}</button>
        </div>);
}


export default Seventhmarth;