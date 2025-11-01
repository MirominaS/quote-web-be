import { pool } from '../config/db-config.js';
// import { quote_data} from '../models/quote-models.js';
import { errorlogger, logger } from '../utils/loggers.js';

export const getQuotesController = async(req,res) => {
    try {
        //destructuring, query params
        const {count, writer} = req.query
        logger(`count: ${count}`)
        logger(`writer: ${writer}`)
        logger("Quote running via loggers");
        
        
        const result = await pool.query(`select * from quote_core.quotes_table`)
        logger("result",result)
        let quote_data = result.rows 
        let quotes_list = []

        for(let i = 0; i < quote_data.length; i++){
            const {quote_id,quotes,quote_author,quote_tags,created_on,created_by,deleted_on,deleted_by,is_deleted,is_verified} = quote_data[i]
           quotes_list.push({
                id : quote_id,
                tags : quote_tags,
                quote : quotes,
                by : quote_author,
                createdOn : created_on,
                createdBy : created_by,
                deletedOn : deleted_on,
                deletedBy : deleted_by,
                isDeleted: is_deleted,
                isVerified : is_verified
            })
        }

        
        const filtered_quotes = quotes_list.filter((quote) => quote.by.toLowerCase().includes(writer.toLowerCase()))
        logger(JSON.stringify(filtered_quotes)) //without pretty printing. JSON.stringify changes the object into stringify object
        
        const quote_by_count = count ? filtered_quotes.slice(0,count) : filtered_quotes
 

        // return res.status(201).json();
         return res.status(200).json({
            data: quote_by_count,
            message: "Quotes fetched successfully",
            success: true
        })
    } catch (error) {
        errorlogger("error: ", error)
        return res.status(500).json({
            data:null,
            message: "Something went wrong!",
            success: false
        })        
    }
}

export const insertQuotesController = async(req,res) => {
    try {
        const {quotes,quote_author,quote_tags,created_by} = req.body 
        await pool.query(`insert into quote_core.quotes_table(quotes, quote_author, quote_tags, created_by) values ($1,$2,$3,$4)`,[quotes,quote_author,quote_tags,created_by])
        return res.status(200).json({
            data: {quotes,quote_author,quote_tags,created_by},
            message: "Quote added successfully!",
            success:true
        })  
    } catch (error) {
        console.log(error)
        // errorlogger("error: ", error)
        return res.status(500).json({
            data:null,
            message:"Something went wrong!",
            success:false
        })
    }
}
