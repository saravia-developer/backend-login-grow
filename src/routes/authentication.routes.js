import { Router } from 'express';
import { authenticationControllers } from '../controllers/authentication.controllers.js';

const authenticationRouter = Router();

authenticationRouter.post('/login', async (req, res) => { return await authenticationControllers.login(req, res) });

export default authenticationRouter