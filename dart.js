class EmployeeManager {
    constructor() {
      this.selectedRow = null;
    }
  
    readFormData() {
      const fullName = document.getElementById("fullName").value;
      const empCode = document.getElementById("empCode").value;
      const salary = document.getElementById("salary").value;
      const city = document.getElementById("city").value;
  
      return {
        fullName,
        empCode,
        salary,
        city
      };
    }
  
    insertNewRecord(data) {
      const table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow(table.length);
  
      
  
      newRow.insertCell(0).innerHTML = data.fullName;
      newRow.insertCell(1).innerHTML = data.empCode;
      newRow.insertCell(2).innerHTML = data.salary;
      newRow.insertCell(3).innerHTML = data.city;
      newRow.insertCell(4).innerHTML = `
        <button onClick="employeeManager.onEdit(this)" style ="border-radius:4px;background-color:#ddd;border:none; padding:14px 20px;">Edit</button>
        <button onClick="employeeManager.onDelete(this)" style="border-radius:4px;background-color:#ddd;border:none;padding:14px 20px;">Delete</button>`;
    }
  
    onEdit(td) {
      this.selectedRow = td.parentElement.parentElement;
      document.getElementById("fullName").value = this.selectedRow.cells[0].innerHTML;
      document.getElementById("empCode").value = this.selectedRow.cells[1].innerHTML;
      document.getElementById("salary").value = this.selectedRow.cells[2].innerHTML;
      document.getElementById("city").value = this.selectedRow.cells[3].innerHTML;
    }
  
    updateRecord(formData) {
      this.selectedRow.cells[0].innerHTML = formData.fullName;
      this.selectedRow.cells[1].innerHTML = formData.empCode;
      this.selectedRow.cells[2].innerHTML = formData.salary;
      this.selectedRow.cells[3].innerHTML = formData.city;
    }
  
    onDelete(td) {
      const row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      this.resetForm();
    }
  
    resetForm() {
      document.getElementById("fullName").value = "";
      document.getElementById("empCode").value = "";
      document.getElementById("salary").value = "";
      document.getElementById("city").value = "";
      this.selectedRow = null;
    }
  
    onFormSubmit() {
      const formData = this.readFormData();
      if (this.selectedRow === null) {
        this.insertNewRecord(formData);
      } else {
        this.updateRecord(formData);
      }
      this.resetForm();
    }
  }
  
  // Create an instance of the EmployeeManager class
  const employeeManager = new EmployeeManager();
  