"use strict";

class UserStorage {
  static #users = {
    id: ["mn9069", "olive9069"],
    pwd: ["9069", "2946"],
    name: ["Taehoon", "Elle"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
