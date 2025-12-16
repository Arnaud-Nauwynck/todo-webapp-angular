import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-detail-page',
  imports: [],
  templateUrl: './todo-detail-page.html',
})
export class TodoDetailPage {
  protected id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.activatedRoute.params.subscribe(params => {
      this.id = Number(params['id']);
    });
  }

}
