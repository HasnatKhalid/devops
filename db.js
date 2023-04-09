const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'awseb-e-qntcgtcdfw-stack-awsebrdsdatabase-cu0iduiggiis.cs04j4zm4ivo.us-east-1.rds.amazonaws.com',
  user: 'Faiq15',
  password: 'DwarFGigan20',
  database: 'user'
});

module.exports = connection;