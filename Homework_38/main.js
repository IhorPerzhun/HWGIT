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
      alert('Введено не коректно.');
      return;
    }
    if (role !== 'admin' && role !== 'user') {
      alert('Role must be either "admin" or "user".');
      return;
    }
    this.name = name;
    this.role = role;
    this.isLogIn = false;
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
    this.isLogIn = false;
  }

  changeName(newName) {
    if (typeof newName !== 'string') {
      alert('Введено не коректно.');
      return;
    }
    this.name = newName;
  }

  changePassword(newPassword) {
    
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      alert('Користувач повинен бути в User.');
      return;
    }
    this.users.push(user);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index === -1) {
      alert('Користувач не знайдений.');
      return;
    }
    this.users.splice(index, 1);
  }

  changeUserRole(user, newRole) {
    if (!(user instanceof User)) {
      alert('Користувач повинен бути в User.');
      return;
    }
    if (newRole !== 'admin' && newRole !== 'user') {
      alert('Роль має бути "admin" або "user".');
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

const user1 = new User('Петро', 'admin');
console.log(user1.getName()); 
console.log(user1.getRole()); 
user1.login();
console.log(user1.isLogIn); 
user1.changeName('Іван');
console.log(user1.getName()); 

const admin1 = new Admin('Вася');
const user2 = new User('Валєра', 'user');
admin1.addUser(user1);
admin1.addUser(user2);
console.log(admin1.getAllUsers()); 
admin1.changeUserRole(user2, 'admin');
console.log(user2.getRole()); 
admin1.removeUser(user1);
console.log(admin1.getAllUsers()); 
admin1.removeAllUsers();
console.log(admin1.getAllUsers()); 
