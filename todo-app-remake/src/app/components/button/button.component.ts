import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() togglerAdd: EventEmitter<any> = new EventEmitter();
  @Input() color: string;
  @Input() text: string;
  @Input() lighterColor: string;
  hovered: boolean = true;

  changeHover() {
    this.hovered = this.hovered ? false : true;
  }

  toggleAddTask() {
    this.togglerAdd.emit();
  }
}
