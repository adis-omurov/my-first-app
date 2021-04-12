<Filetr state={filterStudents} change={() => setFilterStudents(!filterStudents)}>
    Only stydents
</Filetr>


const [filterStudents, setFilterStudents] = useState(false)
const [filterWpm, setFilterWpm] = useState(false)
const [filterCommits, setFilterCommits] = useState(false)

let students = persons;
if (filterStudents) {
    students = persons.filter(person => person.role == "Students")
}
const fast = students.filter(person => person.wpm > 34)

let wpm = persons;
if (filterWpm) {
    students = persons.filter(person => person.wpm > 34)
}
const fast = students.filter(person => person.wpm > 34)

let commits = persons;
if (filterCommits) {
    students = persons.filter(person => person.commits > 1000)
}
const fast = students.filter(person => person.commits > 1000)


return (
    <div classsName="Group">
    </div>
    <label>
        <input type="checkbox"={students} onChange={() => setFilterStudents(!filterStudents)} /> Only students
    </label>
    <div>
        <Group persons={fast} />
    </div>
);


return (
    <div classsName="Group">
    </div>
    <label>
        <input type="checkbox"={wpm} onChange={() => setFilterWpm(!filterWpm)} /> Only > 34
    </label>
    <div>
        <Group persons={fast} />
    </div>
);

return (
    <div classsName="Group">
    </div>
    <label>
        <input type="checkbox"={commits} onChange={() => setFilterCommits(!filterCommikts)} /> Only > 1000
    </label>
    <div>
        <Group persons={fast} />
    </div>
); 