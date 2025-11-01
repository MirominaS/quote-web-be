import { pool } from "../config/db-config.js"
import { errorlogger, logger } from "../utils/loggers.js"
import bcrypt from 'bcrypt'


export const insertUserController = async(req,res) => {
    try {       
        const {username,email,password} = req.body 
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashed_password = await bcrypt.hash(password,salt);
        logger("Hashed_password",hashed_password)
        await pool.query(`insert into quote_users.user_table(username,email,hashed_password) values($1,$2,$3)`,[username,email,hashed_password])
        return res.status(200).json({
            data: {username,email,hashed_password},
            message: "User added successfully!",
            success:true
        })  
    } catch (error) {
        errorlogger("error:",error)
        return res.status(500).json({
            data:null,
            message:"Something went wrong!",
            success:false
        })
    }
}