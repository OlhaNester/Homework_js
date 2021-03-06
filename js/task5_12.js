const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

/*
 * Теперь у нас есть конструктор базового класса героя,
 * добавим в prototype какой-то метод.
 */
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); // Mango gained 500 experience points
console.log(mango); // Hero { name: 'Mango', xp: 1500 }
const Warrior = function (name, xp, weapon) {
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */
  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

// Сразу добавим метод для атаки в prototype воина
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword
//poly.gainXp(); // Uncaught TypeError: poly.gainXp is not a function
