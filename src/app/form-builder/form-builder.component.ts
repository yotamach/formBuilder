import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Field } from '../models/field.model';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { Form } from '../models/form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor(private router: Router, private FormService: FormService, private location: Location ,private formBuilder: FormBuilder) { }
  @ViewChild('fieldLabel',{static: false}) fieldLabel: ElementRef;
  @ViewChild('fieldName',{static: false}) fieldName: ElementRef;
  @ViewChild('fieldType',{static: false}) fieldType: ElementRef;

  fields: Field[] = [];
  createdForm: Form;
  displayAddField = true;
  buildForm: FormGroup;
  types = ['color','date','datetime-local','email','file',
            'hidden','image','month','number','password',
            'range','search','tel','text','time','week'];
            
  ngOnInit() {
    this.buildForm = this.formBuilder.group({
      formName: ['', Validators.required]
   });
  }

  addField(){
    console.log(this.fieldName.nativeElement.value);
    this.fields.push({
      name: this.fieldName.nativeElement.value,
      label: this.fieldLabel.nativeElement.value,
      type: this.fieldType.nativeElement.value
    });
    this.displayAddField = !this.displayAddField;
    this.fieldLabel.nativeElement.value = '';
    this.fieldName.nativeElement.value = '';
    this.fieldType.nativeElement.value = '';
  }

  showFieldForm(){
    this.displayAddField = !this.displayAddField;
  }

  goBack(){
    this.location.back();
  }

  createForm(){
    if(this.buildForm.invalid){
      return;
    }
    if(this.fields.length === 0){
      return;
    }
    this.createdForm = {
      name: this.buildForm.value.formName,
      submissions: [],
      fields: [...this.fields]
    }
    this.FormService.createForm(this.createdForm);
    this.router.navigate(["/"]);
  }

}
