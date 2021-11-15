const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const port = 3002;
const bluebird = require('bluebird');
const { request, response } = require('express');

let connection 

app.use(express.json());
app.use(cors({origin:true}));
app.set('port',process.env.PORT || port)
app.get("/",(request,response)=>{
    response.json("Backend Misiontic");
})
app.get("/get-products", async(request,response) =>{
    const [rows,fields] = await connection.execute("SELECT * FROM products");
    console.log({data:rows})
    response.json({data:rows})
})    

app.get("/get-user", async(req,res) =>{
    const email = req.query.email;
    const [rows,fields] = await connection.execute(`SELECT * FROM users where email='${email}'`);
    res.json(rows[0]);

} )

app.post("/control-usuarios", async (request,response) =>{
    try {
        console.log(request.body)
        const {email,name,rol,estado}= request.body;
        await connection.execute(`INSERT INTO users(email,name,rol,estado) VALUES ('${email}','${name}','${rol}','${estado}')`);
        response.json ({status:"ok"})
        
    } catch (error) {
        console.log(error);
        response,json(error);
    }
    response.json(users)
})

app.post("/add-product", async (request,response) =>{
    try {
    console.log(request.body)    
    const {name,price,stock,description} = request.body;
    await connection.execute(`INSERT INTO products (name,price,stock,description) VALUES('${name}',${price},${stock},'${description}')`);
    response.json({status:"ok"})

    }

     catch (error) {
        console.log(error);
        response.json(error);
    }
      response.json(product) 

})

app.post("/RegistroVentas", async (request,response) =>{
    try {
    console.log(request.body)    
    const {idcliente,nombrecliente,idproducto,precioUniario,cantidad,total} = request.body;
    await connection.execute(`INSERT INTO ventas (idcliente,nombrecliente,idproducto,precioUniario,cantidad,total) VALUES(${idcliente},'${nombrecliente}',${idproducto},${precioUniario},${cantidad},${total})`);
    response.json({status:"ok"})

    }

     catch (error) {
        console.log(error);
        response.json(error);
    }
      response.json(ventas) 

})

app.put("/update-product", (request,response) =>{
    const product = request.body;
    console.log(product.name)
    response.json(product)

})

app.delete("/delete-product", (request,response) =>{
    const product = request.body;
    console.log(product.name)
    response.json(product)

})

app.listen(app.get('port'), async() => {
    connection = await mysql.createConnection({
        host     : 'sql10.freesqldatabase.com',
        user     : 'sql10451170',
        password : 'BsDC5rT7HZ',
        database : 'sql10451170',
        port : 3306,
        Promise: bluebird
      });
    
    console.log("server running on port :" + app.get ('port'));

});