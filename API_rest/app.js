const express = require ("express");
const app= express();
const mysql= require("mysql2/promise");
const port= 3001;
const bluebird= require ("bluebird");
const { request } = require("http");
let connection;





app.use(express.json());
app.get("/get-product", async (request, response) =>{
    const [rows, fields]= await connection.execute ("SELECT * FROM ventas");
    console.log(rows);
    console.log(fields);
    response.json(rows);

})

app.post("/add-ventas", async (req, res)=>{
    const [idVenta,precio]=req.body;
    
    await connection.execute('INSERT INTO Ventas (idVenta,precio) VALUES(${idVenta},${precio})');
    
    res.json(Ventas)
})





app.listen(port, async () =>{
    connection= await mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"Fifiteamo1996.",
        database:"Ventas",
        Promise: bluebird
    });

    console.log("Server running on port" + port)

});

