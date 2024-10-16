import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-stattement',
  templateUrl: './account-stattement.component.html',
  styleUrls: ['./account-stattement.component.css']
})
export class AccountStattementComponent {

  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/login'])
  }

}
