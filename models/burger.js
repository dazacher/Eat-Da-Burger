const orm = require("../config/orm.js");

const burger = {
  all: async () => {
    const result = await orm.all("burgers");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burgers", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burgers", objColVals, condition);

    return result;
  },
// Call the orm Delete functtion
  delete: async (condition) => {
    const result = await orm.delete("burgers", condition);

    return result;
  }
};



// Export the database functions for the controller (burgerController.js).
module.exports = burger;
