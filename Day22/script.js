class Person {
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.count = 0;
  }
  login() {
    let { name, family, age } = this;
    this.count++;
    console.log(`${name} ${family} with ${age} YearsOld loggedIn`);
    return this;
  }
  logout() {
    let { name, family, age } = this;
    console.log(`${name} ${family} with ${age} YearsOld loggedOut`);
    return this;
  }
  counter() {
    console.log(`${this.name} loggedIn for ${this.count} times`);
    return this;
  }
}

/* Create a new object with 'new' keyword */

const person1 = new Person("hossein", "haghshenas", 20);

/* chain methodes */

person1.login().logout().login().counter();
