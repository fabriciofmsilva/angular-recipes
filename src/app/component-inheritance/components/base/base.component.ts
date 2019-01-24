import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  template: `NO UI TO BE FOUND HERE!`,
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  constructor(protected router: Router) { }

  openPage(routename: string) {
    this.router.navigateByUrl(`/component-inheritance/${routename}`);
  }

}
