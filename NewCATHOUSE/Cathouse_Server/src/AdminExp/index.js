const express = require("express");

const conn = require("../connect/index");
const router = express.Router();

const { GetTableMaxId } = require("../public");

router.post("/adduser", async function (req, res) {
    try {
        const GetMaxId = GetTableMaxId("admin");
        GetMaxId.then((response) => {
            const maxid = response + 1;
            const sql =
                "INSERT INTO users (id,username,password,permission_level) values (?,?,?,?)";
            const params = [maxid];
            conn.query(sql, function () { });
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
