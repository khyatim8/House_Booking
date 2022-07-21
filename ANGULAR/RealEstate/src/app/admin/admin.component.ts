import { Component, OnInit } from '@angular/core';
import { RegisterHouseService } from '../services/RegisterHouse.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'

})
export class AdminComponent implements OnInit {

    constructor(private _RegisterHouseService: RegisterHouseService) { }

    public house: any;
    ngOnInit(): void {

        this._RegisterHouseService.getRequest().subscribe(res => this.house = res, err => console.log(err))
    }

}