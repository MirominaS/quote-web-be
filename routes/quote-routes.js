import express from 'express'
import { getQuotesController, insertQuotesController } from '../controllers/quote-controller.js';
import { insertUserController } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/",getQuotesController)

router.post("/",insertQuotesController)

router.post("/user",insertUserController)

export default router;