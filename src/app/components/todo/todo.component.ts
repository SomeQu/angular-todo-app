import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgFor, TitleCasePipe } from '@angular/common';
import { ITodo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TitleCasePipe, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  public showed = false;
  public activities: string[] = ['active', 'done', 'pause'];
  @Input() todo!: ITodo;
  @Input() index!: number;
  @Output() todoDelete = new EventEmitter<number>();
  @Output() todoUpdate = new EventEmitter<string>();
  @Output() todoSend = new EventEmitter<string>();
  /**
   * deleteTodo
   */
  public deleteTodo() {
    this.todoDelete.emit(this.index);
  }
  public updateTodo() {
    this.todoUpdate;
  }
  /**
   * showTodo
   */
  public showTodo() {
    this.showed = !this.showed;
    console.log('showed :>> ', this.showed);
  }
  public sendTodoAct(activity: string) {
    this.showed = !this.showed;
    this.todoSend.emit(activity);
  }
}
