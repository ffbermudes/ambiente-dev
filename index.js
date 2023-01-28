//Express
	const express = require("express");
	const app = express();
	const port = 3333
	//variables Router
		const consultaVendasController = require("./consultaVendas/consultaVendasController");

<<<<<<< HEAD

//Config
=======
// Import Router
const categoriesController = require("./categories/CategoriesController")

//CONFIG
>>>>>>> 8f28797afb81b1dcaabd3d8327694cb03361bef6
	//ejs
		app.set("view engine", "ejs");
		app.use(express.static("public"));
	//Express Module to Save Data
		app.use(express.urlencoded({extended: false}));
		app.use(express.json());

//Modules Exports
	//Sequelize
		const dataInfo = require("./models/dataInfo");

<<<<<<< HEAD
//Roots
	//Principal	
		app.get("/", (req,res)=>{
			res.render("index");
		});
	//routers
		app.use("/", consultaVendasController);
=======
//ROOTS
	app.use("/", categoriesController);

	app.get("/consulta", (req,res)=>{
		res.render("consulta");
	});
>>>>>>> 8f28797afb81b1dcaabd3d8327694cb03361bef6

//SEQUELIZE
	//connection
		const Sequelize = require("sequelize");
		const connection = new Sequelize(dataInfo.name, dataInfo.user, dataInfo.password, {
			host: dataInfo.host,
			dialect: dataInfo.dialect,
		});

<<<<<<< HEAD
//On Server
	app.listen(port);
=======
//ON SERVER
	app.listen(port, ()=>{
		console.log("Servidor Rodando na url http://localhost:" + port);
	});
>>>>>>> 8f28797afb81b1dcaabd3d8327694cb03361bef6
