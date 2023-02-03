import { Injectable } from '@angular/core';
import { Task } from '../TASKS';
import { TASKS } from '../sample-task-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/v1/todos/';

  subscribe(arg0: (data: any) => any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getTaskList(): Observable<Task[]> {
    const url = `${this.apiUrl}/allTasks`;
    return this.http.get<Task[]>(url);
  }

  deleteTask(task: Task): Observable<any> {
    const url = `${this.apiUrl}/delete/${task._id}`;
    return this.http.delete(url);
  }

  addTask(task: Task): Observable<any> {
    const url = `${this.apiUrl}/add`;
    return this.http.post(url, task);
  }

  updateReminder(task: Task): Observable<any> {
    const url = `${this.apiUrl}/reminder/${task._id}`;
    return this.http.patch(url, {})
  }
}
