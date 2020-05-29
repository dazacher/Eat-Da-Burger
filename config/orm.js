const connection = require("./connection");

// Object for all our SQL statement functions.
const orm = {
    all: async (tableInput) => {
      const queryString = `SELECT * FROM ${tableInput}`;
  
      const result = await connection.query(queryString);
  
      return result;
    },
  
    create: async (table, cols, vals) => {
      let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
  
      console.log(queryString);
  
      const result = await connection.query(queryString, vals);
  
      return result;
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: async (table, objColVals, condition) => {
      let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
  
      console.log(queryString);
      const result = await connection.query(queryString);
  
      return result;
    }
  };
  
  module.exports = orm;