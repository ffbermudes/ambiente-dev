//Express
	const express = require("express");
	const app = express();
	const port = 3333
	//variables Router
		const consultaVendasController = require("./consultaVendas/consultaVendasController");
		const categoriesController = require("./categories/CategoriesController")

//Modules Express
	//ejs
		app.set("view engine", "ejs");
		app.use(express.static("public"));
	//Express Module to Save Data
		app.use(express.urlencoded({extended: false}));
		app.use(express.json());

//Database
	const dataInfo = require("./models/dataInfo");

//routers
	app.use("/", consultaVendasController);
	app.use("/", categoriesController);

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