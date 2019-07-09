import { Injectable } from '@angular/core';
import { Form } from '../models/form.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private forms: Form[] = [{
    id: '1',
    name: 'Carrer form',
    submissions: '43',
    fields: [{
      id: '1',
      name: 'name',
      label: 'Enter your name:',
      type: 'text'
    },
    {
      id: '2',
      name: 'phone',
      label: 'Enter your phone:',
      type: 'tel'
    }]
  }];
  private formsUpdated = new Subject<Form[]>();
  private currentForm: Form;
  private submissions: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  createForm(newForm: Form){
    this.forms.push(newForm);
  }

  getForms(){
    return this.forms;
  }

  getForm(formId: string){
    return this.forms.find(form => {
      return form.id === formId
    });
  }

  submitForm(fields: any, formId: string){
    fields.formId = formId;
    this.submissions.push(fields);
  }

}
