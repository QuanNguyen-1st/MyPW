const { poolPromise, sql } = require('../../config/db');

class PasswordModel {
    async getPasswordsFrom(username) {
        try {
            const pool = await poolPromise;
            const queryString = 'SELECT * FROM PASSWORDITEM WHERE username = @username';
            const result = await pool.request()
                .input('username', sql.NVarChar, username)
                .query(queryString);
            if (result.recordset.length > 0) {
                // console.log(result.recordset);
                return result.recordset;
            } else {
                return null;
            }
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
}

module.exports = new PasswordModel;