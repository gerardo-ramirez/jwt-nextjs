import jwt from 'jsonwebtoken';
import {serialize} from 'cookie'; 

export default function loginHandler(req, res){

    const { email, password }=req.body;
    if(email == "admin@admin.com" && password == "admin"){

        const token = jwt.sign({
            email: email,
            username:'gerardo',
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        }, 'secret');
           const serialized = serialize("myTokenName", token, {
             httpOnly: true,
             secure: process.env.NODE_ENV === "production",
             sameSite: "strict",
             maxAge: 1000 * 60 * 60 * 24 * 30,
             path: "/",
           });

           res.setHeader("Set-Cookie", serialized);

           return res.json("login success");
        
    }
    res.status(401).json({error: 'invalid email or pass'})
 
}