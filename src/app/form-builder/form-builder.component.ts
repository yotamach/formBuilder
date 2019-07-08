import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Field } from '../models/field.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }
  @ViewChild('fieldLabel',{static: false}) fieldLabel: ElementRef;
  @ViewChild('fieldName',{static: false}) fieldName: ElementRef;
  @ViewChild('fieldType',{static: false}) fieldType: ElementRef;

  fields: Field[] = [];
  displayAddField = true;
  biuldForm: FormGroup;
  types = ['color','date','datetime-local','email','file',
            'hidden','image','month','number','password',
            'range','search','tel','text','time','week'];
            
  ngOnInit() {
    this.biuldForm = new FormGroup({
      formName: new FormControl()
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

}
