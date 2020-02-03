//Challenge 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(arr){
for(let i = 0; i < arr.length; i++){
    let name = arr[i].name;
    let cohort = arr[i].cohort;
    console.log("Name: " + name + ", Cohort: " + cohort);
    }
}

printStudents(students);


//Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printEmployeesManagers(arr){
     console.log("EMPLOYEES");
     for(let i = 0; i < users.employees.length; i++){
        console.log((i + 1) + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name);
     }
     console.log("MANAGERS");
     for(let j = 0; j < users.managers.length; j++){
        console.log((i + 1) + " - " + users.managers[i].last_name + ", " + users.employees[i].first_name);
     }
 }