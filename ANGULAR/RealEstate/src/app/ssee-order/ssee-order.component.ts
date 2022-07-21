import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.services';

@Component({
    selector: 'app-ssee-order',
    templateUrl: './ssee-order.component.html',

})
export class SseeOrderComponent implements OnInit {

    constructor(private _OrderService: OrderService) { }
    public order: any;
    ngOnInit(): void {

        this._OrderService.Getorder().subscribe(res => this.order = res, err => console.log(err))
    }

}