import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styles: []
})
export class TimeComponent implements OnInit {
  private initialValue:Date;

  private transformTime(date:Date):string {
    var d = new DatePipe('pt-PT').transform(date, 'H:m');
    return d;
  }
  show():void {
    let value:any = this.transformTime(this.initialValue);
    console.log(value);
  }

  constructor() {
  }

  ngOnInit() {
    this.initialValue = new Date();
  }

}
