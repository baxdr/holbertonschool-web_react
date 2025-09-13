interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const body = document.getElementsByTagName("body")[0];
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);