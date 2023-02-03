import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';
import { Task } from '../../TASKS';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  showAddTask: boolean = true;
  subscription: Subscription;
  taskList: Task[] = [];
  _color: string = "royalBlue";
  _text: string = "Add New Task";
  _lighterColor: string = "#6988E7";
  constructor(private uiService: UiService, private taskService: TaskService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {
    this.getTaskAgain();
  }

  getTaskAgain(): void {
    this.taskService.getTaskList().subscribe((data) => (this.taskList = data));
  }

  refreshTasksList(): void {
    this.getTaskAgain();
    this.taskList = [];
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      (response) => {
        console.log(response);
        this.refreshTasksList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(
      (response) => {
        console.log(response);
        this.refreshTasksList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleToggle(task: Task) {
    this.taskService.updateReminder(task).subscribe(
      (response) => {
        console.log(response);
        this.refreshTasksList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleToggleAdd() {
    if(this.showAddTask) {
      this._color = "royalBlue";
      this._text = "Add New Task";
      this._lighterColor = "#6988E7"
    } 
    else {
      this._color = "red";
      this._text = "Close";
      this._lighterColor = "tomato"
    }
    this.uiService.toggleAddTask();
  }
}
