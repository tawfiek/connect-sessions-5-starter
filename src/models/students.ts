
import { Pool } from 'pg';
export interface Student {
    id: number;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export class StudentsModel {
  pool: Pool;

  constructor (db: Pool) {
    this.pool = db;
  }

  public async getAllStudents(sort?: 'email' | 'name' | 'created_at'): Promise<Student[]> {
    try {
      const connection = await this.pool.connect();
      const query = `SELECT * FROM students ${sort ? `ORDER BY ${sort}` : ''}`;

      const result = await connection.query(query);

      connection.release();

      return result.rows;
    } catch (e) {
      throw e;
    }
  }

  public async getStudentByID(id: number): Promise<Student> {
    try {
      const connection = await this.pool.connect();

      const query = 'SELECT * FROM students WHERE id = $1';
      const params = [id];

      const result = await connection.query(query, params);

      connection.release();

      return result.rows[0];
    } catch(e) {
      throw e;
    }
  }
  public async createStudent(student: Student): Promise<Student> {
    try {
      const connection = await this.pool.connect();

      const query = 'INSERT INTO students(name, email) VALUES ($1, $2) RETURNING *';
      const params =  [student.name, student.email];

      const result = await connection.query(query, params);

      connection.release();

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  }

  public async updateStudent (id: number, student: Student): Promise<Student> {
    try {
      const connection = await this.pool.connect();

      const query = 'UPDATE students SET name = $1, email = $2 WHERE id = $3 RETURNING *';
      const params = [student.name, student.email, id];

      const result = await connection.query(query, params);

      connection.release();

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  }
}

