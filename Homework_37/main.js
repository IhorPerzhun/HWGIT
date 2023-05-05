/*
1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.

*/
console.log("Завдання №1");

class Circle {
    constructor(radius) {
    this.someRadius = radius
  }
  get radius() {
    return this.someRadius;
  }
  set radius (radius) {
    this.someRadius = radius
  }
  get diametr() {
    return this.someRadius * 2;
  }
  get calcArea() {
    return (this.someRadius **2) * Math.PI
  }
  get calcLenght() {
    return this.someRadius * 2 * Math.PI
  }
}

const circle = new Circle(20);
console.log(circle.radius);
circle.radius = 30
console.log(circle.radius);
console.log(circle.diametr);
console.log(circle.calcArea);
console.log(circle.calcLenght);


/*
2) Реалізуй клас, що описує канцелярський маркер. 
У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; 
текст виводиться доти, доки в маркері є чорнило; 
один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. 
Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.

*/
console.log("Завдання №2");




class Marker {
  constructor(color, inkLevel) {
    this._color = color;
    this._inkLevel = inkLevel;
  }

  get color() {
    return this._color;
  }

  get inkLevel() {
    return this._inkLevel;
  }

  drawText(text) {
    let remainingInk = this._inkLevel;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        remainingInk -= 0.5;
      }
      if (remainingInk < 0) {
        console.log(`Out of ink!`);
        break;
      }
      console.log(`%c${text[i]}`, `color: ${this._color};`);
    }
    this._inkLevel = remainingInk;
  }
}



class RefillableMarker extends Marker {
  refill() {
    this._inkLevel = 100;
  }
}

const marker = new RefillableMarker('red', 100);

      const printBtn = document.getElementById('printBtn');
      printBtn.addEventListener('click', () => {
        const text = document.getElementById('text').value;
        marker.drawText(text);
        document.getElementById('marker-output').innerHTML = `Ink level: ${marker.inkLevel}%`;
      });

      const refillBtn = document.getElementById('refill-btn');
      refillBtn.addEventListener('click', () => {
        marker.refill();
        document.getElementById('marker-output').innerHTML = `Ink level: ${marker.inkLevel}%`;
      });


