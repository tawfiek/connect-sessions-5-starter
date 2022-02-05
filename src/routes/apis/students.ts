import { Router } from 'express';
import { createStudent, getAllStudents} from '../../controllers/students';
import { studentValidation } from '../../middlewares/student-validation';

const router = Router();

router.post('/', studentValidation, createStudent);

router.get('/', getAllStudents);

// TODO: GET route controller and validation middleware
router.get('/:id');

//TODO: GET route controller and validation middleware
router.put('/');

export default router;
