const mysql = require("mysql2");

require("dotenv").config();

const getQuery = async (query: string, params: []) => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  let sql = query;
  let data: any;

  let doQuery = new Promise((resolve, reject) => {
    con.query(sql, params, (error: any, results: any, fields: any) => {
      if (error) {
        console.log(error);
        reject(error);
      }

      data = results?.[0] || [];
      resolve(results);
    });
  });

  await doQuery;
  con.end();

  return data;
};

module.exports = {
  queryData: getQuery,
};
