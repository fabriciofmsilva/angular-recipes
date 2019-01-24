import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentInheritanceRoutingModule } from './component-inheritance.routing';
import { BaseComponent } from './components/base/base.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentInheritanceRoutingModule
  ],
  declarations: [
    BaseComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
  ],
})
export class ComponentInheritanceModule { }
