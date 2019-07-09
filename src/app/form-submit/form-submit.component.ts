import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Form } from '../models/form.model';
import { FormService } from '../services/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})
export class FormSubmitComponent implements OnInit {

  formId: string;
  currentForm: Form; 
  constructor(private route: ActivatedRoute, private router: Router, private FormService: FormService, private location: Location ,private formBuilder: FormBuilder) { }
  customForm: FormGroup;

  ngOnInit() {
    this.formId = this.route.snapshot.params['id']; 
    this.currentForm = this.FormService.getForm(this.formId);
    //console.log(this.currentForm);
    let formControls = {};
    this.currentForm.fields.forEach((field) => {
      formControls[field.name] = ['', Validators.required];
    });
    this.customForm = this.formBuilder.group(formControls);
  }

  submitForm(){
    console.log(this.customForm.value);
    this.customForm.reset();
  }

  goBack(){
    this.location.back();
  }

}
