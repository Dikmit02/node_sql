const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:"localhost",
    user:"myuser",
    database:'mytestdb',
    password:'mypass'
})



function getAllUsers(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM person`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}


function addNewPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(
            `INSERT INTO person (name,age,city) VALUES(?,?,?)`,
            [name,age,city],
            function(err,rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve()
                }
            }

        )

        
    })

}
exports=module.exports={
    getAllUsers,
    addNewPerson
}