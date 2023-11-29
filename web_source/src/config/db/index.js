const sql = require('mssql/msnodesqlv8');

const config = {
    server: 'your_server',
    database: 'your_database',
    user: 'your_username',
    password: 'your_password',
    options: {
      trustedConnection: true, // Use Windows Authentication
      enableArithAbort: true,
    },
};
  
  sql.connect(config).then(() => {
    console.log('Connected to SQL Server');
  }).catch((err) => {
    console.error('Error connecting to SQL Server:', err);
  });