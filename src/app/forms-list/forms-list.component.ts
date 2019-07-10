import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form.model';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {

  constructor(private router: Router,private formService: FormService) {  }
  private formsSub: Subscription;
  forms: Form[] = [];

  ngOnInit() {
    this.formService.getForms();
    this.formsSub = this.formService.getFormUpdateListener()
    .subscribe((forms) => {
      this.forms = forms;
    });
  }

  addNewForm(){
    this.router.navigate(["/formcreate"]);
  }

}
