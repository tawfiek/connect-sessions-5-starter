import { Router } from 'express';
import StudentRouter from './apis/students';

const routes = Router();
routes.get('/', (req, res) => {
    res.send('Welcome to Students API');
});
routes.use('/students', StudentRouter);

export default routes;
