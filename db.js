var db=[
  {Name:'alok',Age:21,Salary:70000,DOB:'19-01-2002'},
  {Name:'prabhav',Age:54,Salary:200,DOB:'1-01-2002'},
  {Name:'akshat',Age:23,Salary:50000,DOB:'2-01-2002'},
  {Name:'lakshya',Age:35,Salary:60000,DOB:'17-01-2003'}
  
];
var sal =  db.filter(function(db) {
  return db.Salary > 30000
});

let method1=Object.assign({},sal);

console.log(method1);
//partcc
let group = db.reduce((r, a) => {
 
 r[a.Age] = [...r[a.Age] || [], a];
 return r;
}, {});
console.log("group", group);
//partdd

let increment = [];
for (let k = 0; k< db.length; k++){
if (db[k].Salary < 1000 && db[k].Age>20){
let po = db[k].Salary * 5;
increment.push(po);}}

console.log(increment);
