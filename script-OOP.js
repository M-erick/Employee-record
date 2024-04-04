class DataManager {
    constructor() {
        this.data = null;
        this.revenue = null;
    }
    // insert ,update,delete and read are abstract method
    insert(data) {
        throw new Error('Insert method not implemented');
    }

    update(data) {
        throw new Error('Update method not implemented');
    }

    delete() {
        throw new Error('Delete method not implemented');
    }
    read(){
        throw new Error('Insert method not implemented');
    }
    getInfoForDisplay(){
        return `Hello, my name is  Admin.`;


    }
    // this method will be overridden by EmployeeManager :Polymorphism
    calculateTotal(salary){
        return  this.revenue;
    }
}
class EmployeeManager extends DataManager{
    constructor(){
        super();
       
        this.selectedRow = null;

        this._nhifRate = 0.01;
        this._nssfRate = 0.005;
        this._housingTax = 0.01;
    }

    get NhifRate(){
        return this._nhifRate;
    }
    get housingTax(){
        return this._housingTax;
    }
    get NssfRate(){
        return this._nssfRate;
    }

    calculateTotal(salary){

        return salary - (salary - this.NhifRate) -(salary -this.NssfRate) -( salary - this.housingTax);

    }
    read(){
        const fullName = document.getElementById("fullName").value;
        const empCode = document.getElementById("empCode").value;
        const salary = document.getElementById("salary").value;
        const city = document.getElementById("city").value;
        // const netSalary = this.calculateTotal(salary);
 
      const netSalary = salary - (salary * this.NhifRate) - (salary * this.NssfRate) - (salary * this.housingTax);
      return {
        fullName,
        empCode,
        salary,
        city,
        netSalary
      };
    }
    insert(data){
        const table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.length);
 
      newRow.insertCell(0).innerHTML = data.fullName;
      newRow.insertCell(1).innerHTML = data.empCode;
      newRow.insertCell(2).innerHTML = data.salary;
      newRow.insertCell(3).innerHTML = data.city;
      newRow.insertCell(4).innerHTML = data.netSalary;


      newRow.insertCell(5).innerHTML = `
        <button onClick="employeeManager.onEdit(this)" style ="border-radius:4px;background-image: url('image.png'); color:white; border:none; padding:14px 20px;">Edit</button>
        <button onClick="employeeManager.onDelete(this)" style="border-radius:4px;background-image: url('image.png'); color:white; border:none;padding:14px 20px;">Delete</button>`;
 

    }
    update(formData){
        this.selectedRow.cells[0].innerHTML = formData.fullName;
        this.selectedRow.cells[1].innerHTML = formData.empCode;
        this.selectedRow.cells[2].innerHTML = formData.salary;
        this.selectedRow.cells[3].innerHTML = formData.city;
        this.selectedRow.cells[4].innerHTML = formData.netSalary;
  
    }
    delete(td){
        const row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      this.resetForm();  
    }
    onEdit(td){
        this.selectedRow = td.parentElement.parentElement;
      document.getElementById("fullName").value = this.selectedRow.cells[0].innerHTML;
      document.getElementById("empCode").value = this.selectedRow.cells[1].innerHTML;
      document.getElementById("salary").value = this.selectedRow.cells[2].innerHTML;
      document.getElementById("city").value = this.selectedRow.cells[3].innerHTML;
    

    }
    resetForm() {
        document.getElementById("fullName").value = "";
        document.getElementById("empCode").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("city").value = "";
        this.selectedRow = null;
      }
    
      onFormSubmit() {
        const formData = this.read();
        if (this.selectedRow === null) {
          this.insert(formData);
        } else {
          this.update(formData);
        }
        this.resetForm();
  
      }

}
class SupplyManager extends DataManager{
    constructor(){
        super();

        // essential items

    }

    read(){
        const itemName= document.getElementById("itemName").value;
        const itemCode = document.getElementById("itemCode").value;
        const price = document.getElementById("price").value;
        const expirationDate = document.getElementById("expirationDate").value;
        return {
            fullName,
            empCode,
            salary,
            city,
            netSalary
          };
    }
    insert(data){
        const table = document.getElementById("itemList").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.length);
 
      newRow.insertCell(0).innerHTML = data.itemName;
      newRow.insertCell(1).innerHTML = data.itemCode;
      newRow.insertCell(2).innerHTML = data.price;
      newRow.insertCell(3).innerHTML = data.expirationDate;
    //   newRow.insertCell(4).innerHTML = data.netSalary;


      newRow.insertCell(5).innerHTML = `
        <button onClick="supplyManager.onEdit(this)" style ="border-radius:4px;background-image: url('image.png'); color:white; border:none; padding:14px 20px;">Edit</button>
        <button onClick="supplyManager.onDelete(this)" style="border-radius:4px;background-image: url('image.png'); color:white; border:none;padding:14px 20px;">Delete</button>`;
 

    }
    update(formData){
        this.selectedRow.cells[0].innerHTML = formData.itemName;
        this.selectedRow.cells[1].innerHTML = formData.itemCode;
        this.selectedRow.cells[2].innerHTML = formData.price;
        this.selectedRow.cells[3].innerHTML = formData.expirationDate;
  
    }
    delete(td){
        const row = td.parentElement.parentElement;
      document.getElementById("itemList").deleteRow(row.rowIndex);
      this.resetForm();  
    }
    onEdit(td){
        this.selectedRow = td.parentElement.parentElement;
      document.getElementById("itemName").value = this.selectedRow.cells[0].innerHTML;
      document.getElementById("itemCode").value = this.selectedRow.cells[1].innerHTML;
      document.getElementById("price").value = this.selectedRow.cells[2].innerHTML;
    //   document.getElementById("city").value = this.selectedRow.cells[3].innerHTML;
    

    }
    resetForm() {
        document.getElementById("itemName").value = "";
        document.getElementById("itemCode").value = "";
        document.getElementById("price").value = "";
        // document.getElementById("city").value = "";
        this.selectedRow = null;
      }
    
      onFormSubmit() {
        const formData = this.read();
        if (this.selectedRow === null) {
          this.insert(formData);
        } else {
          this.update(formData);
        }
        this.resetForm();
  
      }
}
const employeeManager = new EmployeeManager();
const supplyManager = new SupplyManager();