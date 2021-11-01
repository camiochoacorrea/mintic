const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection; // variable para almacenar la conexión a la DB

// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({ origin: true }));

app.set('port', process.env.PORT || port)

app.get("/", (req,res) => {
    res.json("Backend misiontic shop");
})

app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");
    console.log({ data: rows })
    response.json({ data: rows });
})

app.get("/get-user", async (req,res) =>{
    const email = req.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM users where email='${email}'`);
    console.log("Hola")
    res.json(rows[0])
})

app.post("/registrar-venta", async (req, res) => {
    try {
        console.log(req.body)
        const {idcliente,nombrecliente, idproducto, precioUnitario, cantidad,total, encargado} = req.body;
        await connection.execute(`INSERT INTO products (idcliente, nombrecliente, idproducto, precioUnitario, cantidad, total, encargado) VALUES(${idcliente},'${nombrecliente}', ${idproducto}, ${precioUnitario}, ${cantidad}, ${calcular}, '${encargado}')`);
        res.json({status:"ok"})
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

app.put("/update-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
})
app.delete("/delete-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
})


app.listen(app.get('port'), async () => {
    connection = await mysql.createConnection({
        host: 'sql10.freesqldatabase.com',
        user: 'sql10445608',
        password: 'ZIrk6W3iQQ',
        database: 'sql10445608',
        port: 3306,
        Promise: bluebird
    }); 
    console.log("Server running on port: " + app.get('port'));
});