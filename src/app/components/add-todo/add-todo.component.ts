import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() todoAdded = new EventEmitter<string>();
  public todoName = '';
  /**
   * console
   */
  public console() {
    console.log(this.todoName);
  }
  public addTodo() {
    if (this.todoName.trim()) {
      this.todoAdded.emit(this.todoName);
    }
  }
}
