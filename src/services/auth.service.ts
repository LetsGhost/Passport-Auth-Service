import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class AuthService {
    private secret: string;

    constructor() {
        this.secret = process.env.JWT_SECRET || '';
        this.initializePassport();
    }

    private initializePassport() {
        const opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: this.secret,
        };

        passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
            done(null, jwtPayload);
        }));
    }

    generateToken(data: object): string {
        try{
            return jwt.sign(
                { data },
                this.secret,
                {
                    issuer: process.env.ISSUER,
                    audience: process.env.AUDIENCE,
                    expiresIn: '1h',
                }
            );
        } catch (error) {
            console.error(error);
            throw new Error('Error generating token');
        }
    }
}

export default new AuthService();