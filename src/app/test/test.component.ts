import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { UserService } from '../shared/user.service';



export interface Representative {
    name?: string;
    image?: string;
}

export interface Country {
    name?: string;
    code?: string;
}
export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: boolean;
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {
    customers: Customer[]=[];

    totalRecords: number=0;

    cols: any[]=[];

    loading: boolean;

    representatives: Representative[];

    selectAll: boolean = false;

    selectedCustomers: Customer[]=[];

  constructor(private service:UserService ) { 
    this.representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "Xuxue Feng", image: 'xuxuefeng.png'}
    ];

    this.loading = true;
  }

  
  ngOnInit(): void {

  }

  loadCustomers(event: LazyLoadEvent) {
    console.log("loadCustomers");
    console.log(event);
    this.loading = true;

    setTimeout(() => {
        this.service.getCustomers({lazyEvent: JSON.stringify(event)}).then(res => {
            this.customers = res.customers;
            this.totalRecords = res.totalRecords;
            this.loading = false;
        })
    }, 1000);
}




}
