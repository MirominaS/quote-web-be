import express from 'express'
import { getQuotesController } from '../controllers/quote-controller.js';


const router = express.Router();

router.get("/",getQuotesController)

export default router;