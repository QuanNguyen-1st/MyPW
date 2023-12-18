const { poolPromise, sql } = require('../../config/db');
// const sql = require('mssql/msnodesqlv8');

class AccountModel {
    async getAllData() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM FEEDBACK');
            return result.recordset;
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
}


module.exports = new AccountModel;