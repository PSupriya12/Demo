let students = [
	{
		"name": "Akshit",
		"address": "Moradabad",
		"phone": "98760"
	},
	{
		"name": "Nikita",
		"address": "Lucknow",
		"phone": "98754"
	},
	{
		"name": "Somya",
		"address": "Delhi",
		"phone": "67878"
	},
	{
		"name": "Eshika",
		"address": "Bangalore",
		"phone": "67676"
	},
	{
		"name": "Parul",
		"address": "Chennai",
		"phone": "77668"
	}
]

//Deleting whole object
console.log("Object Before deleting : ");
console.log(students);
console.log("Using Delete Keyword for "
	+ "Deleting object at index 0");
delete students[0];

// Filter out undefined elements
students = students.filter(Boolean);

console.log("Object Post Deleting : ");
console.log(students);

//Deleting specific property
console.log("Using Delete Keyword for "
	+ "Deleting object property at index 1");
delete students[1].phone;
console.log("Object Post Deleting : ");
console.log(students);

//Adding new property into the object
for(let idx = 0; idx < students.length; idx++)
{
    students[idx]["marks"] = idx * 50;
}
console.log("After adding new property: ");
console.log(students);

//Adding new object 
const newObj = {
    "name": "Supriya", 
    "address": "Sangli", 
    "phone": 64389,
    "marks": 60
}

students.push(newObj);
console.log("After adding new object: ");
console.log(students);

//Updating an existing property
students[1].student = "Maria";
console.log("After updation: ");
console.log(students);

//Deleting using splice
students.splice(0, 1);
console.log(students);

//stringifying
let myStr = JSON.stringify(students);
console.log("After converting js object to string: ");
console.log(myStr);

//converting to js object
let myObj = JSON.parse(myStr);
console.log("Again converting string to js object: ");
console.log(myObj);