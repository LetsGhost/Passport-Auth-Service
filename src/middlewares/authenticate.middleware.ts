import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

class AuthenticateAPI {
    authenticate(req: Request, res: Response, next: NextFunction) {

        // Check if the token is provided
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Access denied. Token is not provided' });
        }

        // Extract the token from the Authorization header
        const token = req.headers.authorization.split(' ')[1];

        // Check if the token is valid
        if (token !== process.env.API_KEY) {
            return res.status(401).json({ message: 'Access denied. Token is invalid' });
        }

        next();
    }
}

export default new AuthenticateAPI();