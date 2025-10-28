import express, { json } from 'express';

import quoteRouter from './routes/quote-routes.js';
import cors from 'cors';

const app = express();
const PORT = 1999;

const corsOption = {
    origin:"*", //to allow every origin
}

app.use(cors(corsOption))

app.use(json());
app.use("/quotes",quoteRouter)
    //    JSdoc comment
    /**
    * @description 1.trim the quoteDetail according to the count getting from request.
    * @description 2.filter the quoteDetail according to the string received as writer from request.
    * @description 3.change the var name quoteDetail to qoutes.         
    */
// app.get("/quotes",


app.listen(PORT,() => {
    console.log(`quote-web backend is running on ${PORT}.`);
});

