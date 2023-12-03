const poolPromise = require('../../config/db');

async function getExampleData() {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM ACCOUNT');

        return result.recordset;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

module.exports = {
    getExampleData,
};
