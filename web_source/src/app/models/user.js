const { poolPromise, sql } = require('../../config/db');

class UserModel {
    async findUsername(username) {
        try {
            const queryString = 'SELECT TOP 1 * FROM USERS WHERE username = @username';
            
            const pool = await poolPromise;
            const result = await pool.request()
                .input('username', sql.NVarChar, username)
                .query(queryString);
            if (result.recordset.length > 0) {
                return result.recordset;
            } else {
                return null;
            }
        } catch (err) {
            return null;
        }
    }

    async getAllData() {
        try {
            const pool = await poolPromise;
            const result = await pool.request().query('SELECT * FROM USERS');
            const formattedResult = result.recordset.map((row) => {
                return {
                    ...row,
                    firstAccess: row.firstAccess ? formatDate(row.firstAccess) : null,
                    lastAccess: row.lastAccess ? formatDate(row.lastAccess) : null,
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

module.exports = new UserModel;