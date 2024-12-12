// controllers/userController.js
import UserService  from "../services/userService.js";

const userService = new UserService();

export const getUser = async (req, res) => {
     try{
         const userDetails = await userService.getUserDetails(req.body);
         res.status(200).json(userDetails);
     }catch (err){
         res.status(400).json({err: err.message})
     }
};

export const getName = (req, res) => {
    const userName = userService.getUserName();
    res.status(200).json(userName);
};