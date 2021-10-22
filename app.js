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
     /* response.json(product) */

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
        user     : 'sql10446047',
        password : '3xCpIJNzPi',
        database : 'sql10446047',
        Promise: bluebird
      });
    
    console.log("server running on port :" + app.get ('port'));

});