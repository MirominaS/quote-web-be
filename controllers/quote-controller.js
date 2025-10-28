import { quotes} from '../models/quote-models.js';
import { errorlogger, logger } from '../utils/loggers.js';

export const getQuotesController = (async(req,res) => {
    try {
        //destructuring, query params
        const {count, writer} = req.query
        logger(`count: ${count}`)
        logger(`writer: ${writer}`)
        logger("Quote running via loggers");

        
        const filtered_quotes = quotes.filter((quote) => quote.by.toLowerCase().includes(writer.toLowerCase()))
        logger(JSON.stringify(filtered_quotes)) //without pretty printing. JSON.stringify changes the object into stringify object
        
        const quote_by_count = count ? filtered_quotes.slice(0,count) : filtered_quotes
        // console.log("quote-by-count",quote_by_count)

        return res.status(201).json(quote_by_count);
    } catch (error) {
        errorlogger("error: ", error)
        return res.status(500).json({message: "Something went wrong!"});        
    }
})
