import AuthService  from '../services/auth.service';
import {Response, Request} from 'express';

class AuthController {
    generateToken(req: Request, res: Response) {
        const token = AuthService.generateToken(req.body);
        res.status(200).json({ token });
    }
}

export default new AuthController();