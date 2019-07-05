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
    submissions: '43'
  },
  {
    id: '2',
    name: '',
    submissions: ''
  }];

  ngOnInit() {
  }

  addNewForm(){
    this.router.navigate(["/formcreate"]);
  }

}
