let perPage = 10;

// Render list of employees (with optional filtering)
function renderEmployees(data = employeeData) {
  const container = document.getElementById("employeeList");
  container.innerHTML = "";

  data.slice(0, perPage).forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <strong>${emp.firstName} ${emp.lastName}</strong><br>
      Email: ${emp.email}<br>
      Department: ${emp.department}<br>
      Role: ${emp.role}<br>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    container.appendChild(card);
  });
}

// Edit action: store in localStorage and go to form
function editEmployee(id) {
  const emp = employeeData.find(e => e.id === id);
  localStorage.setItem("editEmp", JSON.stringify(emp));
  window.location.href = "add-edit.html";
}

// Delete action
function deleteEmployee(id) {
  if (confirm("Delete this employee?")) {
    employeeData = employeeData.filter(e => e.id !== id);
    saveToStorage();
    renderEmployees();
  }
}

// Change how many per page
function changePageSize(val) {
  perPage = parseInt(val);
  renderEmployees();
}

// Show filter section
function filterPopup() {
  document.getElementById("filters").classList.toggle("hidden");
}

// Apply filters
function applyFilters() {
  const name = document.getElementById("filterName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  const filtered = employeeData.filter(e =>
    e.firstName.toLowerCase().includes(name) &&
    e.department.toLowerCase().includes(dept) &&
    e.role.toLowerCase().includes(role)
  );
  renderEmployees(filtered);
}

// Reset filters
function resetFilters() {
  document.getElementById("filters").classList.add("hidden");
  renderEmployees();
}

// Live search by name/email
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchBar").addEventListener("input", e => {
    const term = e.target.value.toLowerCase();
    const filtered = employeeData.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
    renderEmployees(filtered);
  });

  // Initial render
  renderEmployees();
});
