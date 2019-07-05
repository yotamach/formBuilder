import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsListComponent } from './forms-list/forms-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  { path: '', component: FormsListComponent },
  { path: 'formcreate', component: FormBuilderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
