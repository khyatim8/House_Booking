import { Component, OnInit } from '@angular/core';
import { TblVenderProperty } from '../models/RegisterHouseData';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-houseregister',
    templateUrl: './houseregister.component.html'

})
export class HouseregisterComponent {
    constructor(public httpc: HttpClient) { }

    TblVenderPropertyModel: TblVenderProperty = new TblVenderProperty();
    TblVenderPropertyModels: Array<TblVenderProperty> = new Array<TblVenderProperty>();

    registerHouse() {

        console.log(this.TblVenderPropertyModel);
        var housedto = {
            userName: this.TblVenderPropertyModel.userName,
            email: this.TblVenderPropertyModel.email,
            propertyName: this.TblVenderPropertyModel.propertyName,
            propertyDescription: this.TblVenderPropertyModel.propertyDescription,
            propertyImage: this.TblVenderPropertyModel.propertyImage,
            propertySize: this.TblVenderPropertyModel.propertySize,
            propertylocation: this.TblVenderPropertyModel.propertylocation,
            propertyPrice: Number(this.TblVenderPropertyModel.propertyPrice),
            discount: Number(this.TblVenderPropertyModel.discount),

        }
        this.httpc.post("https://localhost:44392/api/RegisterHouse", housedto).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
        this.TblVenderPropertyModel = new TblVenderProperty();

    }
    PostSuccess(res: any) {
        console.log(res);

    }
    PostError(res: any) {
        console.log(res);
    }
    DeleteHouse(input: TblVenderProperty) {
        var index = this.TblVenderPropertyModels.indexOf(input);
        this.TblVenderPropertyModels.splice(index, 1);
    }
    getHouse() {
        console.log("Hi");
        this.httpc.get("https://localhost:44392/api/RegisterHouse").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
    }
    GetSuccess(input: any) {
        this.TblVenderPropertyModels = input;
    }
    GetError(input: any) {
        console.log(input);
    }

}