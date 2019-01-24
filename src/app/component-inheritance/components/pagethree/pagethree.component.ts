import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent extends BaseComponent implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
