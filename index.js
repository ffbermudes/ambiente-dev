//EXPRESS
	const express = require("express");
	const app = express();
	const port = 3333

// Import Router
	const categoriesController = require("./categories/CategoriesController");
	const screenConsultController = require("./screenConsult/screenConsultController");

//CONFIG
	//ejs
		app.set("view engine", "ejs");
		app.use(express.static("public"));

//MODULES EXPORTS
	//sequelize
		const dataInfo = require("./models/dataInfo");

//Roots
	app.use("/", categoriesController);
	app.use("/", screenConsultController);

// //SEQUELIZE
// 	//connection
// 		const Sequelize = require("sequelize");
// 		const connection = new Sequelize(dataInfo.name, dataInfo.user, dataInfo.password, {
// 			host: dataInfo.host,
// 			dialect: dataInfo.dialect,
// 		});

//ON SERVER
	app.listen(port, ()=>{
		console.log("Servidor Rodando na url http://localhost:" + port);
	});