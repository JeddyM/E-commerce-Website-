import jwt from 'jsonwebtoken';


const generateToken = (res, userId) =>{

    //jwt.sign creates a new jwt token
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:'30d'

    });

    //Storing the token in a cookie
    //This sets the generated JWT in a cookie named jwt in the user's browser.
    res.cookie('jwt', token, {
        httpOnly:true,
        secure: process.env.NODE_ENV !=='development',
        sameSite:'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    })

    
};


export default generateToken;