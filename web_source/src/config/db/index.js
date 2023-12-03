const sql = require('mssql/msnodesqlv8');

const config = {
    connectionString: 'Server=localhost;Database=mypw;Trusted_Connection=yes;Driver={SQL Server};',
};

const pool = new sql.ConnectionPool(config);

pool.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

module.exports = pool;