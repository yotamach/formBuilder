import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';
import { HttpClientModule } from "@angular/common/http";
import { FormService } from './services/form.service';

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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
