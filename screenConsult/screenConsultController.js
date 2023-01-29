const express = require('express');
const router = express.Router();

router.get("/consulta", (req, res)=>{
	res.render("consulta", {
		vendasQt: 'qtVendasMes',
		vendasMes: 'totVendasMes'
	});
});

module.exports = router;