import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { TaskService } from '../core/services/task';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ AsyncPipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  tasksService = inject(TaskService);
  tasks$ = this.tasksService.tasks$;
  newTitle = '';
  count=0;
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
  console.log('Home component initialized');
  setInterval(() => {
    this.count++;
    this.cdr.markForCheck();
  }, 1000);
}

  addTask() {
    if (this.newTitle.trim()) {
      this.tasksService.addTask(this.newTitle.trim());
      this.newTitle = '';
    }
  }

}
