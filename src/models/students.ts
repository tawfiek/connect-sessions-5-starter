import client from '../config/db';
export interface Student {
    id?: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export class StudentsModel {
    constructor() {}

    // Show all students functionality.

    async showStudents(): Promise<Student> {
        try {
            const sql = 'SELECT * FROM students';
            const connection = await client.connect();
            const res = await connection.query(sql);
            const studentsData = res.rows[0];
            return studentsData;
        } catch (error) {
            return error;
        }
    }

    // Show one student with id functionality.

    async showStudent(id: number): Promise<Student> {
        try {
            const sql = 'SELECT * FROM students WHERE id = $1';
            const connection = await client.connect();
            const res = await connection.query(sql, [id]);
            const studentData = res.rows[0];
            return studentData;
        } catch (error) {
            return error;
        }
    }

    // Add student functionality.

    async addStudent(student: Student): Promise<Student> {
        try {
            const sql = 'INSERT INTO students(name , email)   VALUES($1 , $2)';
            const connection = await client.connect();
            const res = await connection.query(sql, [
                student.name,
                student.email,
            ]);
            const newStudent = res.rows[0];
            return newStudent;
        } catch (error) {
            return error;
        }
    }

    // Update student functionality.

    async updateStudent(student: Student): Promise<Student> {
        try {
            const sql =
                'UPDATE students SET name = $1 , email = $2 WHERE id = $3';
            const connection = await client.connect();
            const res = await connection.query(sql, [
                student.name,
                student.email,
                student.id,
            ]);
            const updatedStudent = res.rows[0];
            return updatedStudent;
        } catch (error) {}
    }

    // Delete student functionality.

    async deleteStudent(id: number): Promise<Student> {
        try {
            const sql = 'DELETE  FROM students WHERE id = $1';
            const connection = await client.connect();
            const res = await connection.query(sql, [id]);
            const deletedStudent = res.rows[0];
            return deletedStudent;
        } catch (error) {
            return error;
        }
    }
}
