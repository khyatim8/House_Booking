import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.services';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html'
 
})
export class VenderComponent implements OnInit {

  constructor(private _Propertyservice: PropertyService) { }

  public property : any ; 
   ngOnInit(): void {

    this._Propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))
  }

}

