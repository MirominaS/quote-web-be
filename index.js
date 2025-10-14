import express, { json } from 'express';
import { quotes} from './models/quote-models.js';
import { errorlogger, logger } from './utils/loggers.js';
import cors from 'cors';

const app = express();
const PORT = 1999;

const corsOption = {
    origin:"*", //to allow every origin
}

app.use(cors(corsOption))

app.use(json());
    //    JSdoc comment
    /**
    * @description 1.trim the quoteDetail according to the count getting from request.
    * @description 2.filter the quoteDetail according to the string received as writer from request.
    * @description 3.change the var name quoteDetail to qoutes.         
    */
app.get("/quotes",async(req,res) => {
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


app.listen(PORT,() => {
    console.log(`quote-web backend is running on ${PORT}.`);
});

