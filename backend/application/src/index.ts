const mysql = require("mysql2");

require("dotenv").config();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gabi04avila?",
  database: "telzir",
});

con.connect((err: any) => {
  if (err) {
    console.log("Error connecting to Db", err);
    return;
  }
  console.log("Connection established");
  console.log(process.env.DB_PWD);
});

con.end((err: any) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});
