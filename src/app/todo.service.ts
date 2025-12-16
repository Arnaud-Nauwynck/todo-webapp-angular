import { Injectable } from '@angular/core';
import {map, Observable, of, timer} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  callHttpCreateTodo(description: string): Observable<string> {
    return timer(5_000).pipe(map(x => "ok"));
  }
}
