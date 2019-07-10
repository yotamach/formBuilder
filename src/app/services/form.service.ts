import { Injectable } from '@angular/core';
import { Form } from '../models/form.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private forms: Form[] = [];
  private formsUpdated = new Subject<Form[]>();
  private submissions: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  getFormUpdateListener() {
    return this.formsUpdated.asObservable();
  }

  createForm(newForm: Form){
    let formData = {
      name: newForm.name,
      submissions: [],
      fields: newForm.fields
    };
    this.http
      .post<{ message: string , content: Form}>("http://localhost:3000/api/v1/forms", formData)
      .subscribe(responseData => {
        console.log(responseData);
        console.log(this.forms);
        this.router.navigate(["/"]);
    });
  }

  getForms(){
    this.http
    .get<any>(
      "http://localhost:3000/api/v1/forms")
    .pipe(
      map((formData) => {
        if(formData.length > 0){
          return formData.map((form) => { return {
            id: form.id,
            name: form.name,
            submissions: form.submissions,
            fields: form.fields
          }; 
        });
        }
      })
    )
    .subscribe(transformedforms => {
      this.forms = transformedforms;
      this.formsUpdated.next([...this.forms]);
    });
  }

  getForm(formId: string){
    return this.forms.filter(form => {
      return form.id === formId
    })[0];
  }

  submitForm(fields: any, formId: string){
    fields.formId = formId;
    this.submissions.push(fields);
  }

  getSubmissions(formId: string){
    return this.submissions.filter((submit) => {
      return submit.formId === formId;
    });
  }

}
