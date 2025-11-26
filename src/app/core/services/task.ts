import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private tasks = [
    { id: 1, title: 'Tâche 1'},
    { id: 2, title: 'Tâche 2'},
    { id: 3, title: 'Tâche 3',},
  ];
  
  private tasksSubject = new BehaviorSubject(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title
    };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }

  getTasks() {
    return of(this.tasks).pipe(delay(500));
  }
}
