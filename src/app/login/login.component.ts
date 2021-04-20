import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
 };



  errmessage: string;

  

  constructor(private backendService: BackendService, private router: Router) {}

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    
  }


  login() { }

}
