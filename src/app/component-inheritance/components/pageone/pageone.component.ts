import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent extends BaseComponent implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
