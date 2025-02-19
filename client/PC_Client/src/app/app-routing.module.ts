import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcBuildListComponent } from './pc-build-list/pc-build-list.component';
import { PcComponentsListComponent } from './pc-components-list/pc-components-list.component';
import { PcComponentsNewComponent } from './pc-components-new/pc-components-new.component';
import { PcBuildsNewComponent } from './pc-builds-new/pc-builds-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PcBuildsEditComponent } from './pc-builds-edit/pc-builds-edit.component';
import { PcComponentsEditComponent } from './pc-components-edit/pc-components-edit.component';
import { PHomeComponent } from './phome/phome.component';

const routes: Routes = [
  { path: '', redirectTo: 'builds-list', pathMatch: 'full' },
  { path: 'builds-list', component: PcBuildListComponent },
  {path: 'components-list', component: PcComponentsListComponent},
  {path: 'components-new', component: PcComponentsNewComponent},
  {path: 'builds-new', component: PcBuildsNewComponent},
  {path: 'edit-build/:id', component: PcBuildsEditComponent},
  {path: 'edit-component/:id', component: PcComponentsEditComponent},
  {path: 'home', component: PHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
