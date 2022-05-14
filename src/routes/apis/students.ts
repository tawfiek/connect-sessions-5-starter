import { Router } from 'express';
import { createStudent, getAllStudents, getStudent, updateStudent} from '../../controllers/students';
import { studentValidation, validateStudentID } from '../../middlewares/student-validation';

const router = Router();

router.post('/', studentValidation, createStudent);

router.get('/', getAllStudents);

router.get('/:id', validateStudentID, getStudent);

router.put('/:id', validateStudentID, studentValidation, updateStudent);

export default router;
