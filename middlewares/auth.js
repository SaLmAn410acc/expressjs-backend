import jwt from 'jsonwebtoken'

export const authMiddleware =async (req, res, next) =>{
    const token = req.headers.authorization

    if (!token || !token.startsWith('Bearer ')){
        throw new Error('No token provided')
    }

    try{
        const decoded = await jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
        req.user= { token: decoded.email }

        next()
    }catch (err){
        throw new Error('Invalid token')
    }
}
