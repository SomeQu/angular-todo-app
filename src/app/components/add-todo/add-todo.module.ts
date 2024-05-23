import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [AddTodoComponent],
})
export class AddTodoModule {}
