import { Component, OnInit } from '@angular/core';
import { TblOrder } from '../models/OrderData';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',

})
export class OrderComponent {

    constructor(public httpc: HttpClient) { }

    TblOrderModel: TblOrder = new TblOrder();
    TblOrderModels: Array<TblOrder> = new Array<TblOrder>();

    AddOrder() {
        console.log(this.TblOrderModel);
        var Orderdto = {
            orderId: Number(this.TblOrderModel.orderId),
            fullName: this.TblOrderModel.fullName,
            userName: this.TblOrderModel.userName,
            venderName: this.TblOrderModel.venderName,
            email: this.TblOrderModel.email,
            propertyImage: this.TblOrderModel.propertyImage,
            address: this.TblOrderModel.address,
            housePrice: Number(this.TblOrderModel.housePrice),
        }
        this.httpc.post("https://localhost:44392/api/Order", Orderdto).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
        this.TblOrderModel = new TblOrder();

    }
    PostSuccess(res: any) {
        console.log(res);

    }
    PostError(res: any) {
        console.log(res);
    }

    EditOrder(input: TblOrder) {
        this.TblOrderModel = input;
    }

    DeleteOrder(input: TblOrder) {
        var index = this.TblOrderModels.indexOf(input);
        this.TblOrderModels.splice(index, 1);
    }


    getOrder() {
        console.log("Hi");
        this.httpc.get("https://localhost:44392/api/Order").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
    }
    GetSuccess(input: any) {
        this.TblOrderModels = input;
    }
    GetError(input: any) {
        console.log(input);
    }

}