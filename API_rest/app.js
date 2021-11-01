const express = require ("express");
const app= express();
const cors= require("cors")
const mysql= require("mysql2/promise");
const port= 3001;
const bluebird= require ("bluebird");
const { request } = require("http");
let connection;





app.use(express.json());
app.use(cors({origin: true}));
// con este anterior se permite que cualquier dispositivo se pueda conectar con la api
app.set('port', process.env.PORT || port)

app.get("/get-product", async (request, response) =>{
    const [rows, fields]= await connection.execute ("SELECT * FROM ventas");
    console.log(rows);
    console.log(fields);
    response.json({data: rows});

})


app.get("/get-user", async (req, res) => {
    const email= req.query.email;
    const [rows, fields]= await connection.execute (`SELECT * FROM Usuarios where email = '${email}'`);
    res.json(rows[0])
})

app.post("/add-ventas", async (req, res)=>{
    try{
        const {idVenta,precio}=req.body;
    
        await connection.execute('INSERT INTO Ventas (idVenta,precio) VALUES(${idVenta},${precio})');
        res.json({status:"Ok"})
    }
    catch(erro){
        console.log(error)
        res.json(error)
    }
    
    
})





app.listen(app.get('port'), async () =>{

    connection= await mysql.createConnection({
        host: "sql10.freesqldatabase.com",
        user: "sql10445634",
        password:"3ZaKxBYpPM",
        database:"ql10445634",
        port: 3306,
        Promise: bluebird
    });


   /* connection= await mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"Fifiteamo1996.",
        database:"Ventas",
        Promise: bluebird
    });
    */

    console.log("Server running on port" + port)

});

