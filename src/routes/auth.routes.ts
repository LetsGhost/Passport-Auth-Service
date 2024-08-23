import { Router } from 'express';

import AuthController from '../controllers/auth.controller';
import AuthenticateAPI from '../middlewares/authenticate.middleware';

const router = Router();

router.use(AuthenticateAPI.authenticate);

router.post('/auth', AuthController.generateToken);

export default router;