"use strict";
const fs = require("fs").promises;

class UserStorage {
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/TaeWeb/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);

    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/TaeWeb/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);

    if (users.id.includes(userInfo.id)) {
      throw "Id already exists";
    }
    console.log("work");
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.email.push(userInfo.email);
    users.pwd.push(userInfo.pwd);
    fs.writeFile("./src/databases/TaeWeb/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
