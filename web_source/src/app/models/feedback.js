const { poolPromise, sql } = require('../../config/db');
// const sql = require('mssql/msnodesqlv8');

class AccountModel {
    async getAllData() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM FEEDBACK');
            const formattedResult = result.recordset.map((row) => {
                return {
                    ...row,
                    time: row.time ? formatDate(row.time) : null
                };
            }); 
            function formatDate(date) {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${day}/${month}/${year}`;
            }
            return formattedResult;
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
}


module.exports = new AccountModel;