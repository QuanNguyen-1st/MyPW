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
                return result.recordset;
            } else {
                return null;
            }
        } catch (err) {
            console.error('Error executing query:', err);
            throw err;
        }
    }
	async comparedUsedPassword(username, password) {
		try {
			const pool = await poolPromise;
			const queryString ='SELECT COUNT(*) AS count FROM PASSWORDITEM WHERE username = @username AND password = @password';
			const result = await pool.request()
				.input('username', sql.NVarChar(127), username)
				.input('password', sql.NVarChar(127), password)
				.query(queryString);
			if (result.recordset.length > 0) {
				return result.recordset[0]['count'];
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