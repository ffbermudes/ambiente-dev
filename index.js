//EXPRESS
	const express = require("express");
	const app = express();
	const port = 3333

//CONFIG
	//ejs
		app.set("view engine", "ejs");
		app.use(express.static("public"));

//MODULES EXPORTS
	//sequelize
		const dataInfo = require("./models/dataInfo");

//ROOTS
	app.get("/", (req,res)=>{
		res.render("index");
	});

	app.get("/consulta", (req,res)=>{
		res.render("consulta");
	});

// //SEQUELIZE
// 	//connection
// 		const Sequelize = require("sequelize");
// 		const connection = new Sequelize(dataInfo.name, dataInfo.user, dataInfo.password, {
// 			host: dataInfo.host,
// 			dialect: dataInfo.dialect,
// 		});

//ON SERVER
	app.listen(port);