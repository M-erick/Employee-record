class Person {
    constructor(fullName, city) {
      // Private properties
    this._fullName = fullName;
    this._city = city;
    }
    get fullName() {
        return this._fullName;
      }
    
      get city() {
        return this._city;
      }
  
    getIntroduction() {
      return `Hello, my name is ${this.fullName} and I live in ${this.city}.`;
    }
  }
  
  class Employee extends Person {
    constructor(fullName, city, empCode, salary=0) {
      super(fullName, city); // Call parent constructor
      // Private properties
    this._empCode = empCode;
    this._salary = salary;
    }
    get empCode() {
        return this._empCode;
      }
  
    calculateNetSalary() {
      const nhifRate = 0.01;
      const nssfRate = 0.005;
      const housingTax = 0.01;
      return this.salary - (this.salary * nhifRate) - (this.salary * nssfRate) - (this.salary * housingTax);
    }
  
    // Abstract method - subclasses must implement
    getInfoForDisplay() {
      throw new Error('getInfoForDisplay method not implemented');
    }
  }
  
  class FullTimeEmployee extends Employee {
    constructor(fullName, city, empCode, salary, benefits) {
      super(fullName, city, empCode, salary);
      this.benefits = benefits;
    }
  
    getInfoForDisplay() {
      return {
        fullName: this.fullName,
        empCode: this.empCode,
        salary: this.salary,
        city: this.city,
        netSalary: this.calculateNetSalary(),
        benefits: this.benefits
      };
    }
  }
  
  class ContractEmployee extends Employee {
    constructor(fullName, city, empCode, salary, hourlyRate,workedHours) {
      super(fullName, city, empCode, salary);
      this.hourlyRate = hourlyRate;
      this.workedHours = workedHours;
    }
  
    // Polymorphism - different implementation for contract employee
    calculateNetSalary() {
        const grossSalary = this.hourlyRate * this.workedHours;
        const baseNetSalary = super.calculateNetSalary();

        return grossSalary - baseNetSalary;

    }
  
    getInfoForDisplay() {
      return {
        fullName: this.fullName,
        empCode: this.empCode,
        salary: this.salary, 
        city: this.city,
        
        netSalary: this.calculateNetSalary(),
      };
    }
  }
  
  // Usage example
  const fullTimeEmployee = new FullTimeEmployee("Erick muriithi", "Nairobi", "FTE001",5000, ["Health Insurance", "Paid Time Off"]);
  const contractEmployee = new ContractEmployee("Jane ", "Machakos", "CTE002", 30, 75,45);
  
  console.log(fullTimeEmployee.getInfoForDisplay());
  console.log(contractEmployee.getInfoForDisplay());
  