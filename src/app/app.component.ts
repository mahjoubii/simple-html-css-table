import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'customTableApp';
  loadedCustomers :any = [];
  rate = "70.00";
  deposit = "500.00";

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.onFetchCustomer()
  }

  private onFetchCustomer() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(customers => {
        this.loadedCustomers = customers;
        console.log(customers[0].name)
      })
  }
}
