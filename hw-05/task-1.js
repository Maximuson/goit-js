const Account = function (name, login) {
  this.name = name;
  this.login = login;
};
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.name}, Email: ${this.login}`);
};
