const sql = require('mssql/msnodesqlv8');

async function connect() {
    const config = {
        // server: 'localhost',          // Replace with your SQL Server host or IP address
        // database: 'mypw',    // Replace with your database name
        // options: {
        //     trustedConnection: true,   // Use Windows Authentication
        //     enableArithAbort: true,
        // },
        // driver:
        //     'SQL Server',
        connectionString: 'Server=localhost;Database=mypw;Trusted_Connection=yes;Driver={SQL Server};',
    };
    
    await sql.connect(config).then(() => {
        console.log('Connected to SQL Server');
    }).catch((err) => {
        console.error('Error connecting to SQL Server:', err);
    });
}

module.exports = { connect };