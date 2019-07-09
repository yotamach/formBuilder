import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form.model';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  constructor(private router: Router,private formService: FormService) {  }

  forms: Form[] = [];

  ngOnInit() {
    this.forms = this.formService.getForms();
  }

  addNewForm(){
    this.router.navigate(["/formcreate"]);
  }

}
