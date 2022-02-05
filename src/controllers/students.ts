import {Request, Response, NextFunction} from 'express';
import { StudentsModel } from '../models/students';
import db from '../config/db';

const studentsModel = new StudentsModel(db);

// TODO: Implement controller for list students endpoint.

// TODO: Implement controller for get student by id endpoint.

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

        const students = await studentsModel.getAllStudents();

        return res.status(200).json(students);
    } catch (e) {
        next(e);
    }
}

//TODO: Implement controller for update student endpoint.

