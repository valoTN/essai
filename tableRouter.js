const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const obj = {};
    const rownumber = req.query.rows || 1;
    const colnumber = req.query.cols || 2;
    const tableclass = req.query.tabclass || "table";
    const rowclass = req.query.rowclass || "row";
    const colclass = req.query.colclass || "col";
    const border = req.query.border;

    obj.elementname = "table";
    obj.row_number = rownumber;
    obj.columns_number = colnumber;
    obj.table_class = tableclass;
    obj.row_class = rowclass;
    obj.columns_class = colclass;
    let table = `<table class='${tableclass}' border>`;
    for (let i = 0; i < rownumber; i++) {
        table += `<tr class='${rowclass}'>`;
        for (let j = 0; j < colnumber; j++) {
            table += `<td class='${colclass}'>Row : ${i + 1}, Col : ${j + 1}</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`;
    obj.body = table;

    res.render('index', {obj: obj});
});

module.exports = router;