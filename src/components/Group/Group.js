import { useState } from "react";

const example = [
    { name: "Elaman", role, "Teacher", wpm: 10, commits: 100 },
    { name: "Tynchtyk", role, "Teacher", wpm: 78, commits: 0 },
    { name: "Choro", role, "Assistant", wpm: 102, commits: 1040 },
    { name: "Madina", role, "Student", wpm: 30, commits: 5000 },
    { name: "Adis", role, "Student", wpm: 10, commits: 100 },
    { name: "Islam", role, "Student", wpm: 10, commits: 100 },
    { name: "Kutman", role, "Student", wpm: 10, commits: 100 },
    { name: "Chyngyz", role, "Student", wpm: 10, commits: 100 },
    { name: "Erjan", role, "Student", wpm: 10, commits: 100 },
    { name: "Danila", role, "Student", wpm: 10, commits: 100 },
  
];

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