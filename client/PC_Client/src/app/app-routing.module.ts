import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcBuildListComponent } from './pc-build-list/pc-build-list.component';
import { PcComponentsListComponent } from './pc-components-list/pc-components-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'builds-list', pathMatch: 'full' },
  { path: 'builds-list', component: PcBuildListComponent },
  {path: 'components-list', component: PcComponentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
