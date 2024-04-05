
class Employee  {
   
constructor(fullName,city,empCode,salary,profession,type){
  // private properties
    this._empCode = empCode;
    this._salary = salary;
    this._fullName = fullName;
    this._city = city;
    this._profession = profession;
    this._type = type;  //either fullTime or Contract

    // declare public variable that will be used generally:

    this.nssfRate = 0.01;
    this.nhifRate = 0.05;
    this.housingTax =0.01;
    }

    // get the type of employee
    get type(){
      return this._type;
    }
    get city(){
      return this._city;
    }

    // type of profession can be accountant ,Soft Dev
    get profession(){
      return this._profession;
    }

    get fullName(){
      return this._fullName;
    }

    getIntroduction() {
      return `Hello, my name is ${this.fullName} and I live in ${this.city}.`;
    }

    get empCode() {
        return this._empCode;
      }

      get salary(){
        return this._salary;
      }
  
    calculateNetSalary() {
      return this.salary - (this.salary * this.nhifRate) - (this.salary * this.nssfRate) - (this.salary * this.housingTax);
    }
  
    // Abstract method - subclasses must implement
    getInfoForDisplay() {
      throw new Error('getInfoForDisplay method not implemented');
    }
  }
  
  class Manager extends Employee {
    constructor(fullName, city, empCode,salary,benefits,profession,type) {
      super(fullName, city, empCode, salary,profession,type);
      this.benefits = benefits;
    }
  
    getInfoForDisplay() {
      return {
        fullName: this.fullName,
        empCode: this.empCode,
        salary: this.salary,
        profession:this.profession,
        type:this.type,
        city: this.city,
        netSalary: this.calculateNetSalary(),
        benefits: this.benefits
      };
    }
  }
  
  class Engineer extends Employee {
    constructor(fullName, city, empCode ,hourlyRate,workedHours, profession,type) {
      super(fullName, city, empCode,profession,type);
      this.hourlyRate = hourlyRate;
      this.workedHours = workedHours;
    }
  
    // Polymorphism - different implementation for contract employee
    calculateNetSalary() {
        const grossSalary = this.hourlyRate * this.workedHours;

        // const baseNetSalary = super.calculateNetSalary();

        return grossSalary;

    }
  
    getInfoForDisplay() {
      return {
        fullName: this.fullName,
        empCode: this.empCode,
        profession:this.profession,
        hourlyRate: this.hourlyRate, 
        workedHours:this.workedHours,
        city: this.city,
        
        
        netSalary: this.calculateNetSalary(),
      };
    }
  }
  
  // Usage example
  const ManagerPersonnel = new Manager("Erick muriithi", "Nairobi", "FTE001",5000, ["Health Insurance", "Paid Time Off"],"CTM Manager","Fixed");
  const EngineerPersonnel = new Engineer("Jane ", "Machakos", "CTE002", 30, 75,"Software Engineer","Contract");
  
  console.log(ManagerPersonnel.getInfoForDisplay());
  console.log(EngineerPersonnel.getInfoForDisplay());
  