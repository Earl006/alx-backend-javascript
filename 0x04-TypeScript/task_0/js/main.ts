export interface Student{
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}

const firstStudent: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 21,
	location: "Nairobi"
}

const secondStudent: Student = {
	firstName: "Jane",
	lastName: "Doe",
	age: 22,
	location: "Nairobi"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})