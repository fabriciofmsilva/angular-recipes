import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';

const routes: Routes = [
  {
    path: '',
    component: PageoneComponent,
  },
  {
    path: 'pageone',
    component: PageoneComponent,
  },
  {
    path: 'pagetwo',
    component: PagetwoComponent,
  },
  {
    path: 'pagethree',
    component: PagethreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentInheritanceRoutingModule { }
