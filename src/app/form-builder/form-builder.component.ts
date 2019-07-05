import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }

  types = ['color','date','datetime-local','email','file',
            'hidden','image','month','number','password',
            'range','search','tel','text','time','week'];
            
  ngOnInit() {
  }

}
