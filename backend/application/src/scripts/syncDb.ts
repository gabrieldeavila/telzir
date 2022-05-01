const mysql = require("mysql2");

require("dotenv").config();


const getQuery = async (sql: string, params: []) => {
  const con = createConnection();

  let data = await doQuery(con, sql, params);

  con.end();
  
  return data;
};

const createConnection = () => {
  const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  return con;
}

const doQuery = async (con: any, sql: string, params: []) => {
  let data: any;

  let querying = new Promise((resolve, reject) => {
    con.query(sql, params, (error: any, results: any, fields: any) => {
      if (error) {
        console.log(error);
        reject(error);
      }

      data = results?.[0] || [];
      resolve(results);
    });
  });

  await querying;

  return data;
}

module.exports = {
  queryData: getQuery,
};
