import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: []
})
export class PaginationComponent implements OnInit {
  public cantidad:number = 67;
  public offset:number = 20;

  constructor() {
  }

  changePage(data:any) {
    console.log(data);
  }

  ngOnInit() {
  }

}
