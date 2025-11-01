import { pool } from "../config/db-config.js"
import { errorlogger } from "../utils/loggers.js"


export const insertUserController = async(req,res) => {
    try {
        const {username,email,hashed_password} = req.body 
        await pool.query(`insert into quote_users.user_table(username,email,hashed_password) values($1,$2,$3)`,[username,email,hashed_password])
        return res.status(200).json({
            data: {username,email,hashed_password},
            message: "User added successfully!",
            success:true
        })  
    } catch (error) {
        errorlogger("error",error)
        return res.status(500).json({
            data:null,
            message:"Something went wrong!",
            success:false
        })
    }
}