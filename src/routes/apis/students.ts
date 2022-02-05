import { Router } from 'express';
const router = Router();
import * as studentsRoutes from '../../controllers/students';
import validate from '../../middlewares/student-validation';

// POST route to add new student
router.post('/', validate, studentsRoutes.addStudent);// in my opinion the only endpoint that needs validation

// GET route to show all students' data
router.get('/', studentsRoutes.showStudents);

// GET route to show student's data with specific id 
router.get('/:id', studentsRoutes.showStudent);

// Put route to update student's data
router.put('/' , studentsRoutes.updateStudent);

// Delete route to delete student's data
router.delete('/:id', studentsRoutes.deleteStudent);

export default router;
