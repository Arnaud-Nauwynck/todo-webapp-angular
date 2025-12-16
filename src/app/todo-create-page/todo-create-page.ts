import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TodoDTO, TodoService} from '../todo.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-todo-create-page',
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './todo-create-page.html',
})
export class TodoCreatePage {

  protected description = '';
  protected inprogress = false;

  protected displayMessage: string|undefined;

  protected createdDTO: TodoDTO|undefined;

  constructor(protected todoService: TodoService) {}

  protected createTodo() {
    console.log("... Creating TODO (call server) with description:", this.description);
    this.inprogress = true;
    this.displayMessage = "call in progress...";
    this.todoService.callHttpCreateTodo(this.description).subscribe({
      next: (response) => {
        this.createdDTO = response;
        console.log("... TODO created successfully:", response);
        this.description = ''; // Clear the input field after successful creation
        this.inprogress = false;
        this.displayMessage = "Done called server successfully";
      },
      error: (error) => {
        console.error("... Error creating TODO:", error);
        this.inprogress = false;
        this.displayMessage = "Failed to call server, please retry";
      }
    });
  }
}
