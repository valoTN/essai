const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const obj = {}
    const type = req.query.type;
    const placeholder = req.query.placeholder || "placeholder";
    const name = req.query.name || "name";
    const number = req.query.number || 2;

    obj.elementname = "input";
    obj.name = name;
    if (type != "radio" && type != "checkbox")
        obj.placeholder = placeholder;
    if (type == "radio" || "checkbox")
        obj.number = number;

    switch (type) {
        case "text":
            obj.body = `<input type='text' placeholder='${placeholder}' name='${name}'>`;
            break;
        case "password":
            obj.body = `<input type='password' placeholder='${placeholder}' name='${name}'>`;
            break;
        case "radio":
            var radio = ``;
            for (let i = 0; i < number; i++) {
                radio += `<input type='radio' name='${name}' value='${name}${i}'>`;           
            }
            obj.body = radio;
        break;
        default:
            obj.body = `<input type='text' placeholder='${placeholder}' name='${name}'>`;
            break;
    };

    res.json(obj);
});

module.exports = router;