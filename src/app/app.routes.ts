import { Routes } from '@angular/router';
import {HomePage} from './home-page/home-page';
import {TodoListPage} from './todo-list-page/todo-list-page';
import {TodoCreatePage} from './todo-create-page/todo-create-page';
import {TodoDetailPage} from './todo-detail-page/todo-detail-page';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePage},
  {path: 'todo/list', component: TodoListPage},
  {path: 'todo/create', component: TodoCreatePage},
  {path: 'todo/:id', component: TodoDetailPage},

];
