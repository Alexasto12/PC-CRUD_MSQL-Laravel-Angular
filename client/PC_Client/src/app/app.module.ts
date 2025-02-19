import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PcComponentsListComponent } from './pc-components-list/pc-components-list.component';
import { PcBuildListComponent } from './pc-build-list/pc-build-list.component';
import { PcComponentsNewComponent } from './pc-components-new/pc-components-new.component';
import { PcBuildsNewComponent } from './pc-builds-new/pc-builds-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PcComponentsEditComponent } from './pc-components-edit/pc-components-edit.component';
import { PcBuildsEditComponent } from './pc-builds-edit/pc-builds-edit.component';
import { PHomeComponent } from './phome/phome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PcComponentsListComponent,
    PcBuildListComponent,
    PcComponentsNewComponent,
    PcBuildsNewComponent,
    PcBuildsEditComponent,
    PcComponentsEditComponent,
    PHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
