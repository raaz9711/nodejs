var sqlite3 = require('sqlite3').verbose();
var db= new sqlite3.Database('./mydb.db')
let con=[]
// var db = new sqlite3.Database('mydb.db');
 
let sql ='select info from lorem ';

db.all(sql ,(err,lens)=>{
    if(err){
        console.log('Error')
        throw err;
    }
    lens.forEach(element => {
    console.log(element.info)
    con.push(element.info)
});   })

db.close();
const http=require('http');
const hostname='127.0.0.1';
const port = 3000;

const server=http.createServer( (req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    
    res.write('<ul>');
    con.forEach(element => {
       res.write(`<li>${element}</li>`) 
    });
    res.write('</ul>');
res.end()

})

server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}`)
})
