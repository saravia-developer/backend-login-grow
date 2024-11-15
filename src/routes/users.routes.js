import { Router } from "express";
import { usersControllers } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get('/', async (req, res) => { return await usersControllers.findAll(req, res)});
usersRouter.get('/:usuario', async (req, res) => { return await usersControllers.findByUsername(req, res)});
usersRouter.get('/name/:name', async (req, res) => { return await usersControllers.findByName(req, res)});
usersRouter.post('/register', async (req, res) => { return await usersControllers.create(req, res)});
usersRouter.patch('/:id', async (req, res) => { return await usersControllers.update(req, res)});
usersRouter.delete('/:id', async (req, res) => { return await usersControllers.delete(req, res)});

export default usersRouter;