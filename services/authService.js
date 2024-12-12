import jwt from 'jsonwebtoken'

class AuthService{
    constructor(db) {
        //db initializer
        this.db = db
    }

    async login(payload){
        console.log('inside service class', payload , process.env.JWT_SECRET)

        const signJwt = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn: '30d'
        })

        return {
            msg: 'User Logged In Succesfully',
            token: signJwt
        }
    }

}

export default AuthService