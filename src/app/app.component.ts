import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3Angular';

  loginsessionuser;
  loginsessionadmin;
  adminemail;
  username;
  constructor(private router:Router) { }

  //angular lifecycle hooks, callbackmethods that perform change detection

  ngDoCheck(){
    if(sessionStorage.getItem('email')){
      this.username=sessionStorage.getItem('email')
      if(sessionStorage.getItem('admin')){
        this.loginsessionadmin=true;
      }
      else{
        this.loginsessionuser=true;
      }
    }else{
      this.loginsessionadmin=false;
      this.loginsessionuser=false;
    }
  }

  logout(){
    sessionStorage.clear();
    this.loginsessionadmin=false;
    this.loginsessionuser=false;
    this.router.navigate(['/Home'])
  }

  
  ngOnInit(): void {
  }
}
