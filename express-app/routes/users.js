const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({
        items: [
            {
                "id": 1,
                "name": "Пеганов Артём"
            },
            {
                "id": 2,
                "name": "Дедков Иван"
            }
        ]
    });
});

module.exports = router;
