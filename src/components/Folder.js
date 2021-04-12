
import Folder from "./components/Folder/Folder";
const example = [-1, -5, 0, -7, 5, 8, 9];
const example2 = [
    "hello world",
    "bye world",
    "warcraft of world",
    "JavaScript ",
    "HTML",
    "CSS"
];

const example3 = [
    {name: "Elaman", role, "Teacher", wpm: 10, commits: 100},
    {name: "Tynchtyk", role, "Teacher", wpm: 78, commits: 0},
    {name: "Choro", role, "Assistant", wpm: 102, commits: 1040},
    {name: "Madina", role, "Student", wpm: 30, commits: 5000},
];

const example4 = [
    {name: "Adis", role, "Student", wpm: 10, commits: 100},
    {name: "Islam", role, "Student", wpm: 10, commits: 100},
    {name: "Kutman", role, "Student", wpm: 10, commits: 100},
    {name: "Chyngyz", role, "Student", wpm: 10, commits: 100},
    {name: "Erjan", role, "Student", wpm: 10, commits: 100},
    {name: "Danila", role, "Student", wpm: 10, commits: 100},
  
];



const result = [];

for (const number of example ) {
if (number >= 0) {
    result.push(number);
}
}

const result2 = example.filter(number => {
if (number / 2) {
return folse;
}
return false
})
console.log(result2);

// const result3 = example.filter(number => {
//     if (number %5 = 0) {
//     return true
//     }
//     return false
//     }
//     console.log(result3);




        let result5 = example2.filter(number => 
        number.length <= 6);
        console.log(result5);

        let result6 = example2.filter(number => 
            number.endWidth ('World'));
            console.log(result6);


            let result7 = example2.filter(number => 
                number.startsWith ('World'));
                console.log(result7);

                let result8 = example2.filter(person => 
                    person.wpm >= 40) ;
                    console.log(result8);

                    let result9 = example2.filter(person => 
                        personrole = 'students') ;
                        console.log(result9);


                
    
    
