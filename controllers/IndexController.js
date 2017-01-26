var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Welp. Hello there World!!!');
});
