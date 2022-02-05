import { Student, StudentsModel } from '../models/students';
import { Request, Response, NextFunction } from 'express';

const udacityStudents = new StudentsModel();

// list students endpoint.
export async function showStudents(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const studentInfo = await udacityStudents.showStudents();
        res.status(200).json(studentInfo);
    } catch (error) {
        res.status(400);
        res.json({ message: 'something went wrong' });
    }
}

//  get student by id endpoint.
export async function showStudent(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = req.params.id;
        const studentInfo = await udacityStudents.showStudent(parseInt(id));
        res.status(200).json(studentInfo);
    } catch (error) {
        res.status(400);
        res.json({ message: `cannot find student with id : ${req.params.id}` });
    }
}
// create student endpoint.

export async function addStudent(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const student: Student = {
            name: req.body.name,
            email: req.body.email,
        };
        const newStudent = await udacityStudents.addStudent(student);
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400);
        res.json({ message: 'data entered is not valid' });
    }
}
// update student endpoint.

export async function updateStudent(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const student: Student = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
        };
        const newStudent = await udacityStudents.updateStudent(student);
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400);
        res.json({ message: 'data entered is not valid' });
    }
}

// delete student end point

export async function deleteStudent(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const id = req.params.id;
        const studentInfo = await udacityStudents.deleteStudent(parseInt(id));
        res.status(200).json(studentInfo);
    } catch (error) {
        res.status(400);
        res.json({ message: `cannot find student with id : ${req.params.id}` });
    }
}
