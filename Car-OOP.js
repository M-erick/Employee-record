class Car {
    constructor(brand, model, year) {
        // private properties
      this._brand = brand;
      this._model = model;
      this.year = year;
    }
  
    get brand() {
      return this._brand;
    }
  
    set brand(newBrand) {
      this._brand = newBrand;
    }
  
    get model() {
      return this._model;
    }
  
  
    accelerate() {
      console.log("The car is accelerating!");
    }
  
    brake() {
      console.log("The car is braking!");
    }
  
    getDetails() {
      return `This is a ${this.year} ${this._brand} ${this._model}.`;
    }
  
    // Abstract method 
     startEngine() {
      throw new Error("Start engine method not implemented!");
    }
  
    //  Specific noise for different car
    makeNoise() {
      console.log("The car is making a general car noise!"); // Default behavior
    }
  }
  
  class Sedan extends Car {
    constructor(brand, model, year, numDoors) {
      super(brand, model, year);
      this._numDoors = numDoors;
    }
  
    get numDoors() {
      return this._numDoors;
    }
  
    // Applying polymorphism:overriding the parent getDetais() method
 getDetails() {
     return `This is a ${this.year} ${this.brand} model with  ${this.numDoors} number of doors.`
 }
  
    startEngine() {
      console.log("The sedan engine is starting smoothly!");
    }
  
    makeNoise() {
      console.log("The sedan is honking!"); 
    }
  }
  
  class Truck extends Car {
    constructor(brand, model, year, bedLength) {
      super(brand, model, year);
      this._bedLength = bedLength;
    }
  
    get bedLength() {
      return this._bedLength;
    }
    getDetails() {
        return `This is a ${this.year} ${this.model} model with bendLength of ${this.bedLength}.`
    }
    
  
    startEngine() {
      console.log("The truck engine is roaring to life!");
    }
  
    makeNoise() {
      console.log("The truck is blowing its air horn!"); // Specific noise for Truck
    }
  }
  
  // Create car objects
  const mySedan = new Sedan("Honda", "Civic", 2023, 4);
  const myTruck = new Truck("Ford", "F-150", 2022, 8);
  
const createSedanButton = document.getElementById("createSedan");
const createTruckButton = document.getElementById("createTruck");
const carDetailsDiv = document.getElementById("carDetails");

// Events in JavaScript
createSedanButton.addEventListener("click", function() {
  const newSedan = new Sedan("Honda", "Civic", 2023, 4);
  displayCarDetails(newSedan);
});

createTruckButton.addEventListener("click", function() {
  const newTruck = new Truck("Ford", "F-150", 2022, 8);
  displayCarDetails(newTruck);
});

function displayCarDetails(car) {
  carDetailsDiv.textContent = car.getDetails() + "\n" + car.makeNoise();
}
  
  