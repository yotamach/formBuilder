import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { FormSubmissionsComponent } from './form-submissions/form-submissions.component';

const routes: Routes = [
  { path: '', component: FormsListComponent },
  { path: 'formcreate', component: FormBuilderComponent },
  { path: 'submit/:id', component: FormSubmitComponent } ,
  { path: 'submission/:id', component: FormSubmissionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
