import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PropertyService } from './services/property.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Real Estate';
  public searchTerm:string=''; 

  constructor(private _auth:AuthService, private _property:PropertyService){

  }
  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this._property.search.next(this.searchTerm);
}
}
