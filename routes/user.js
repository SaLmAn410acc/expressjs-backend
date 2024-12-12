import express from 'express';
const router = express.Router();

//controllers functions
import { getUser, getName } from "../controllers/userController.js";

//all routes
router.route('/').get(getUser)
router.route('/username').get(getName)


export default router