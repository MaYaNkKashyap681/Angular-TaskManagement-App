import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../TASKS';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Output() deleteHandler: EventEmitter<Task> = new EventEmitter();
  @Output() toggleHandler: EventEmitter<Task> = new EventEmitter();

  @Input() task: Task;
  faTimes = faTimes;

  deleteButtonClick(task: Task) {
    this.deleteHandler.emit(task);
  }

  toggleReminder(task: Task) {
    this.toggleHandler.emit(task);
  }
}
