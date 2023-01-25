//EXPRESS
	const express = require("express");
	const app = express();
	const port = 3333;

//MODULES EXPORTS
	//sequelize
		const dataInfo = require("./models/dataInfo");

//ROOTS
	app.get("/", (req,res)=>{
		res.send("Hello World");
	});

//SEQUELIZE
	//connection
		const Sequelize = require("sequelize");
		const connection = new Sequelize(dataInfo.name, dataInfo.user, dataInfo.password, {
			host: dataInfo.host,
			dialect: dataInfo.dialect,
		});

//ON SERVER
	app.listen(port);