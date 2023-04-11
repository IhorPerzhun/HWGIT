/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, 
  середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., 
  водії), і наступні методи для роботи з цим об'єктом:
1) Метод, який виводить на екран інформацію про автомобіль.
2) Додавання ім’я водія у список
3) Перевірка водія на наявність його ім’я у списку
4) Підрахунок необхідного часу та кількості палива 
для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/

const car = {
  mark: "Toyota",
  model: "Aqva",
  year: 2017,
  averageSpeed: 100,
  fuelTank: 43,
  fuelConsumption: 3,
  driver: [],

}

function showCarInfo() {
  const entries = Object.entries(car)
  console.log(entries);
}
showCarInfo();

function addDriver(driverName) {
  car.driver.push(driverName);
}
addDriver("Vasia");

function isDriver(driverName) {
  return car.driver.includes(driverName);
}
console.log(isDriver("Vasia"));
console.log(isDriver("Valera"));



function calcTimeAndFuel (distance) {
  const time = distance / car.averageSpeed;
  const breakTime = Math.floor(time / 4); 
  const travelTime = time + breakTime;
  const fuelRequired = (car.fuelConsumption / 100) * distance;
  console.log(`Travel distance: ${distance} km`);
  console.log(`Travel time: ${travelTime} hours`);
  console.log(`Break time: ${breakTime} hours`);
  console.log(`Fuel required: ${fuelRequired} l`);
  
}
calcTimeAndFuel(800);





  












