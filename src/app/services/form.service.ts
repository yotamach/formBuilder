import { Injectable } from '@angular/core';
import { Form } from '../models/form.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private forms: Form[] = [];
  private formsUpdated = new Subject<Form[]>();

  constructor(private http: HttpClient, private router: Router) {}



}
