import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsListComponent,
    FormBuilderComponent,
    FormSubmitComponent,
    FormSubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
