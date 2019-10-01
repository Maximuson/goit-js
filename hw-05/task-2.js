class User {
  constructor(argsObj) {
    this.name = argsObj.name;
    this.age = argsObj.age;
    this.followers = argsObj.followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}
