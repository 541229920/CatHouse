const conn = require('./connect/index')

function GetTableMaxId(table) {
    return new Promise((resolve, reject) => {
        const params = `select MAX(id) from ${table} AS maxid`
        conn.query(params, (err, res) => {
            if (err) {
                return reject(err)
            } else {
                const id = Number(res[0]['MAX(id)']) || 0
                return resolve(id)
            }
        })
    })
}


module.exports = {
    GetTableMaxId
}