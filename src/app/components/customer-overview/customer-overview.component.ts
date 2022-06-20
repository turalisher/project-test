import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {CUSTOMER_DATA} from "../../data";

export interface CustomerData {
  id: number;
  logo: string;
  name: string;
  com_id: number;
  status: string;
  enable: boolean;
  leg_id: number;
  size: string;
}

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['customer', 'button', 'com_id', 'leg_id', 'size', 'status'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: MatTableDataSource<CustomerData>;

  constructor() {
    this.dataSource = new MatTableDataSource<CustomerData>(CUSTOMER_DATA);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public addNewCustomer() {
    this.dataSource.data.push({id: 4, logo: 'assets/table-logo/brand.png', name: `Brand Enterprice ${Math.floor(Math.random() * 10) + 1}`, com_id: Math.floor(1000 + Math.random() * 9000), status: 'active', enable: true, leg_id: Math.floor(1000 + Math.random() * 9000), size: `${Math.floor(Math.random() * 10) + 1} TB`,});
    return this.dataSource.filter = "";
  }



}
