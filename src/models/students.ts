
import { Pool } from 'pg';
export interface Student {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export class StudentsModel {
  db: Pool;

  constructor (db: Pool) {
    this.db = db;
  }

  public async getAllStudents(): Promise<Student[]> {
    try {
      const connection = await this.db.connect();

      const result = await connection.query(
          'SELECT * FROM students'
        );

      connection.release();

      return result.rows;
    } catch (e) {
      throw e;
    }
  }
  // TODO: Implement Get student By ID functionality.

  public async createStudent(student: Student): Promise<Student> {
    try {
      const connection = await this.db.connect();

      const result = await connection.query(
          'INSERT INTO students(name, email) VALUES ($1, $2) RETURNING *',
          [student.name, student.email]
        );

      connection.release();

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  }

  // TODO: Implement Update student functionality.

}

