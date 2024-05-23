import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { NgFor } from '@angular/common';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AddTodoModule } from './components/add-todo/add-todo.module';
import { ITodo } from './models/todo';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, TodoComponent, AddTodoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  public counter = 0;
  public todos: ITodo[] = [];
  public addTodo(todo: string) {
    this.todos.push({
      name: todo,
      activity: 'waiting',
      id: +new Date(),
    });
  }
  public deleteTodo(i: number) {
    this.todos.splice(i, 1);
  }
  public changeActivity(event: string, index: number) {
    this.todos[index] = {
      ...this.todos[index],
      activity: event,
    };
  }
}
