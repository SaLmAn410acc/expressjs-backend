import AuthService from "../services/authService.js";

const authService = new AuthService

export const Login = async (req, res) =>{
    try {
        const response = await authService.login(req.body)

        res.status(200).json(response)
    } catch (err){
        res.status(400).json({msg: 'User not found'})
    }
}