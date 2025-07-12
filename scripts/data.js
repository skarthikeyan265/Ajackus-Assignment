// Initial mock data or load from localStorage
let employeeData = JSON.parse(localStorage.getItem("employees")) || [
  { id: 1, firstName: "Alice", lastName: "Smith", email: "alice@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", department: "IT", role: "Developer" },
  { id: 3, firstName: "Charlie", lastName: "Lee", email: "charlie@example.com", department: "Finance", role: "Analyst" }
];

function saveToStorage() {
  localStorage.setItem("employees", JSON.stringify(employeeData));
}
