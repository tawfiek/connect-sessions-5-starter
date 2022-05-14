import {Request, Response, NextFunction} from 'express';
import { StudentsModel } from '../models/students';
import db from '../config/db';

const studentsModel = new StudentsModel(db);

// TODO: Implement controller for list students endpoint.

export async function getStudent (req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params;

        const student = await studentsModel.getStudentByID(+id);

        if (!student) {
            return res.status(404).json({
                message: 'Student not found.'
            });
        } else {
            return res.status(200).json(student);
        }
    } catch (e) {
        next(e);
    }
}
export async function createStudent(req: Request, res: Response, next: NextFunction) {
    try {
        const studentData = req.body;

        const student = await studentsModel.createStudent(studentData);

        return res.status(200).json(student);
    } catch (e) {
        next(e);
    }
}

export async function getAllStudents (req: Request, res: Response, next: NextFunction) {
    try {
        const {sort} = req.query;

        const students = await studentsModel.getAllStudents(sort as any);

        return res.status(200).json(students);
    } catch (e) {
        next(e);
    }
}

export async  function updateStudent (req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params;
        const studentData = req.body;

        const student = await studentsModel.updateStudent(+id, studentData);

        return res.status(200).json(student);
    } catch (e) {
        next(e);
    }
}
