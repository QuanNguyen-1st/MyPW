const poolPromise = require('../../config/db');

class AccountModel {
    async findUsername(username) {
        try {
            const query = `SELECT TOP 1 * FROM ACCOUNT WHERE accountName = '${username}'`;
            
            const pool = await poolPromise;
            const result = await pool.request().query(query);
            
            return result.recordset;
        } catch (err) {
            // console.error('Error executing query:', err);
            return null;
        }
    }
    async getUsername() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT accountName FROM ACCOUNT');
    
            return result.recordset;
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
    async getAllData() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM ACCOUNT');
    
            return result.recordset;
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
}


module.exports = new AccountModel;