import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asynchandler from "express-async-handler";

//middleware function protects the routes by ensuring that a user is authenticated
// asynchandler -asynchronous errors are handled properly and passed to the error-handling middleware.

const protect = asynchandler(async (req, res, next) => {

  //Extracting the token stored in cookie
    let token;
    token = req.cookies.jwt;
  
    if (token) {
      try {
  
          //verification of token and fetching user info
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");
  
        next();
        
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, invalid token");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized no token");
    }
  });
  
  export { protect };
  