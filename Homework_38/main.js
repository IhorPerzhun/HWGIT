/*
Реалізуй клас User. Під час створення екземпляру на базі цього класу,
 обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} 
 (role може бути або admin або user). У разі невірно переданих даних такого об’єкта
  — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. 
  У класі User повинні бути такі компоненти:

getName
getRole
login
logout
сhangeName
changePassword

У класі Admin повинні бути такі компоненти:

addUser
removeUser
changeUserRole
getAllUsers
removeAllUsers

*/
console.log("Завдання №1");

class User {
  constructor(name, role) {
    if (typeof name !== 'string') {
      alert('Name must be a string.');
      return;
    }
    if (role !== 'admin' && role !== 'user') {
      alert('Role must be either "admin" or "user".');
      return;
    }
    this.name = name;
    this.role = role;
    this.isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  changeName(newName) {
    if (typeof newName !== 'string') {
      alert('New name must be a string.');
      return;
    }
    this.name = newName;
  }

  changePassword(newPassword) {
    // implementation
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      alert('User must be an instance of User.');
      return;
    }
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index === -1) {
      alert('User not found.');
      return;
    }
    this.users.splice(index, 1);
  }

  changeUserRole(user, newRole) {
    if (!(user instanceof User)) {
      alert('User must be an instance of User.');
      return;
    }
    if (newRole !== 'admin' && newRole !== 'user') {
      alert('Role must be either "admin" or "user".');
      return;
    }
    user.role = newRole;
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}

const user1 = new User('Petro', 'admin');
console.log(user1.getName()); // Petro
console.log(user1.getRole()); // admin
user1.login();
console.log(user1.isLoggedIn); // true
user1.changeName('Peter');
console.log(user1.getName()); // Peter

const admin1 = new Admin('John');
const user2 = new User('Sarah', 'user');
admin1.addUser(user1);
admin1.addUser(user2);
console.log(admin1.getAllUsers()); // [user1, user2]
admin1.changeUserRole(user2, 'admin');
console.log(user2.getRole()); // admin
admin1.removeUser(user1);
console.log(admin1.getAllUsers()); // [user2]
admin1.removeAllUsers();
console.log(admin1.getAllUsers()); // []
