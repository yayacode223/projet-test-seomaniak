import express from "express"; 
import {registerUsers, loginUsers} from "../controller/userController.js"; 


const router = express.Router(); 

router.post("/register", registerUsers); 
router.post("/login", loginUsers); 

export default router ; 
