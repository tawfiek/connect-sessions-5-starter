import { Router } from 'express';
import StudentRouter from './apis/students';

const routes = Router();

routes.use('/students', StudentRouter);


export default routes;