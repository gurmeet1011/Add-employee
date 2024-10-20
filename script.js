let employees = [];
let employeeId = 1;

document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);

function addEmployee() {
    // Get input values
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    // Validation for empty fields
    if (name === '' || profession === '' || age === '') {
        showMessage('All fields are required', 'error');
        return;
    }

    // Add employee to the array
    const employee = { id: employeeId++, name, profession, age: parseInt(age) };
    employees.push(employee);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';

    // Show success message
    showMessage('Employee added successfully', 'success');

    // Display the list of employees
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeesList');
    employeeList.innerHTML = ''; // Clear current list

    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee-item');
    
        // Create a span for employee data
        const employeeData = document.createElement('div');
        employeeData.classList.add('employee-data');
        employeeData.innerHTML= `<p>${employee.name}</p> <p>${employee.profession}</p> <p>${employee.age}</p>`;
    
        // Create a button for deleting the employee
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEmployee(employee.id);
    
        // Append both elements to the employeeDiv

        employeeDiv.appendChild(employeeData);
        employeeDiv.appendChild(deleteButton);
        employeeList.appendChild(employeeDiv);
    });
    
}

function deleteEmployee(id) {
    // Remove the employee from the array
    employees = employees.filter(employee => employee.id !== id);

    // Update the display
    displayEmployees();
}

function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type; // Adds either 'success' or 'error' class
}
