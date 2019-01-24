import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent extends BaseComponent implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
