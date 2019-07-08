import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  constructor(private router: Router) {  }

  forms: Form[] = [{
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

  ngOnInit() {
  }

  addNewForm(){
    this.router.navigate(["/formcreate"]);
  }

}
