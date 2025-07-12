document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");
  const editData = JSON.parse(localStorage.getItem("editEmp"));

  if (editData) {
    // Populate form for edit
    document.getElementById("formTitle").innerText = "Edit Employee";
    document.getElementById("submitBtn").innerText = "Save";
    document.getElementById("empId").value = editData.id;
    ["firstName","lastName","email","department","role"].forEach(field => {
      document.getElementById(field).value = editData[field];
    });
    localStorage.removeItem("editEmp");
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // gather data
    const newEmp = {
      id: document.getElementById("empId").value || Date.now(),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      email: document.getElementById("email").value.trim(),
      department: document.getElementById("department").value.trim(),
      role: document.getElementById("role").value.trim()
    };

    // validation
    if (!form.checkValidity() || !validateEmail(newEmp.email)) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // update or add
    const idx = employeeData.findIndex(e => e.id == newEmp.id);
    if (idx > -1) {
      employeeData[idx] = newEmp;
    } else {
      employeeData.push(newEmp);
    }

    saveToStorage();
    window.location.href = "index.html";
  });
});
