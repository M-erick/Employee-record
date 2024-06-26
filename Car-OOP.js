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

  // Method to toggle headlights
  toggleHeadlights() {

    console.log("HeadLights are now OFF");
  }
  
  // Abstract method :measure the fuel efficiency of   specific Car
  calculateFuelEfficiency() {
    throw new Error("Calculating only efficiency foe car ...!");
  }

  //  Specific noise for different car
  makeNoise() {
    console.log("The car is making a general car noise!"); // Default behavior
  }
  getDetails() {
    return `This is a ${this.year} ${this._brand} ${this._model}.`;
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

  calculateFuelEfficiency() {
    const weight = 2000;
    const engineSize = 2.0;
    const fuelEfficiency = engineSize / weight;
    console.log("Fuel efficiency for Sedan car is mpg:", fuelEfficiency);
  }



  toggleHeadlights() {
    console.log("Sedan headlight are now ON");
  }



  makeNoise() {
    // console.log("The sedan is honking!"); 
    return `Sedan model ${this.model} make ${this.year} ${this.brand}  is honking.`;
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
    return `This is a ${this.year} ${this.model} model with bendLength of ${this.bedLength}.`;
  }


  calculateFuelEfficiency() {
    const bedLength = 8;
    const enginePower = 400;
    const fuelEfficiency = enginePower / bedLength;
    console.log("Fuel Efficiency of the truck is mpg:", fuelEfficiency);
  }



  toggleHeadlights(activateSwitch) {
    if (activateSwitch) {

      console.log('Truck headlights are now now ON');
      console.log("Fog light Activated");

    }

  }


  makeNoise() {
    // console.log("The truck is blowing its air horn!"); // Specific noise for Truck
    return `Truck model ${this.model} make ${this.year} ${this.brand}  is blowing Air horn.`;

  }
}

const mySedan = new Sedan("Honda", "Civic", 2023, 4);
const myTruck = new Truck("Ford", "F-150", 2022, 8);

// methods
mySedan.calculateFuelEfficiency();
myTruck.calculateFuelEfficiency();
myTruck.toggleHeadlights(true);

const createSedanButton = document.getElementById("createSedan");
const createTruckButton = document.getElementById("createTruck");
const carDetailsDiv = document.getElementById("carDetails");
const aboutUs = document.getElementById("aboutUs");
const displayAbout = document.getElementById("about")
// custom Event:takes in the input and transforms it to upper case .
const displayEvent = new Event("display");

document.addEventListener('display', () => {
  // console.log("Sedan Car is starting");
  const carDetailsElement = document.getElementById("carDetails");
  const carDetailsText = carDetailsElement.textContent;
  const uppercaseDetails = carDetailsText.toUpperCase();
  carDetailsElement.innerHTML = uppercaseDetails;
});




const DealEvent = new CustomEvent("start", {
  detail: {
    about: " Car people :We are a car rating site ..."
  }
});
// To trigger the event Listener
document.addEventListener('start', (e) => {
  const aboutUsDetails = displayAbout.textContent;
  displayAbout.innerHTML = e.detail.about;

});
aboutUs.addEventListener("click", function () {
  document.dispatchEvent(DealEvent);
})

//  Built-in Events in JavaScript
createSedanButton.addEventListener("click", function () {
  const newSedan = new Sedan("Honda", "Civic", 2023, 4);
  // setTimeout(()=>{

  displayCarDetails(newSedan);
  document.dispatchEvent(displayEvent);


  // },3000);
  // dispatching the event

});



createTruckButton.addEventListener("click", function () {
  const newTruck = new Truck("Ford", "F-150", 2022, 8);
  displayCarDetails(newTruck);
  // dispatching the event
  document.dispatchEvent(displayEvent);

});

let isCarDetailsDisplayed;


function displayCarDetails(car) {

  carDetailsDiv.textContent = car.getDetails() + "\n" + car.makeNoise();
  isCarDetailsDisplayed = true;


}



let p = new Promise((resolve, reject) => {
  let t = 1 + 3;
  let info = {
    name: "Benz",
    model: "C-250",
    year: 2016
  };
  // t===4
  if (info === null) {
    reject("no data available");
  } else {
    setTimeout(() => {
      resolve(info);
    }, 5000);

  }


});

p.then((info) => {
  console.log(info);
});

let someVar;

someVar = 10; // Assigned a number
console.log(someVar, typeof someVar); // Output: 10 number

someVar = "Hello"; // Assigned a string
console.log(someVar, typeof someVar); // Output: Hello string
