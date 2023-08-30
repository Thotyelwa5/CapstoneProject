const db = require("../config") //this imprt the db con from config
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/authentication')

class users{
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName,
        gender, userDOB, userRole, emailAdd,
        profileUrl
        FROM Users;
        `
        db.query(query,(err, results)=>{
            if(err)throw err
            res.json({
                status: res.stausCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName,
        gender, userDOB, userRole, emailAdd,
        profileUrl
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,
            (err, result)=>{
                if (err) throw err 
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    login(req, res){    
    }
    async register(req, res){
        const data = req.body 
        //encrypt password
        data.userPass = await hash(data.userPass, 15)
        //PAYLOAD means DATA THAT COMES FROM THE USER
        const user = {
          emailAdd: data.emailAdd,
          userPass: data.userPass
        }
        //query
        const query = `
        INSERT INTO Users
        SET ?; 
        `
        db.query(query,[data], (err)=>{
          if(err) throw err
          //create a token
          let token = createToken(user) 
             
              res.json({
                  status: res.statusCode,
                  msg: "You are now registered."
              })
        })
      }
    login(req, res) {
        const { emailAdd, userPass } = req.body;
        
        
        const query = `
        SELECT userID,firstName, lastName,
        gender, userDOB, userRole, emailAdd, userPass,
        profileUrl
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        
        db.query(query, async (err, result) => {
            if (err) throw err;
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                });
            } else {
                await compare(userPass, result[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr;
                    // Create a token
                    const token = createToken({
                        emailAdd,
                        userPass
                    })
                    if (cResult) {
                        res.json({
                            msg: "Logged in",
                            token,
                            result: result[0]
                        });
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: "Invalid password or you have not registered"
                        });
                    }
                });
            }
        });
    }
    
    updateUser(req, res){
        const data = req.body
        if (data.userPass){
            data.userPass = 
            hashSync(data.userPass, 15)
        }
        const query =`
        UPDATE User
        SET ?
        WHERE userID = ?
        `
        db.query(query,
            [req.body, req.params.id],
            (err)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "The user record was updated."
                })
            })
    }
    deleteUser(req, res){
        const query = ` DELETE FROM Users 
        WHERE userID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "A user recored was deleted."
            })
        })
    }
} 
module.exports = users