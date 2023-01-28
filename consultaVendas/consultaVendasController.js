const express = require("express");
const router = express.Router();

router.get("/consulta", (req,res)=>{
	res.render("consulta", {
		valorQt: 'Quantidade',
		mesAtual: 'TotalMês'
	});
});

module.exports = router;