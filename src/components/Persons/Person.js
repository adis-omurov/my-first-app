import classes from "./Person.module.css";


const Person = ({ name, age, children }) => {
    return (<div calssName={childrenlasses.Person}>
        <h2>{ name }</h2>
    <h4 className={classes.age}>{ age } years old</h4>
    <h5>{ children }</h5>
    <span className="highlight">Hello</span>
        </div>);
}


export default Person;


return (
    <div className= "App">
        {personalbar.map(person => <Person
         name={person.name}
         role={person.role}  
         wpm={person.wpm} 
         commits={person.comits}/>
            )}
    </div>
);