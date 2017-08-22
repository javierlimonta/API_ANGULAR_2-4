import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styles: [`
    .block {
      overflow: hidden;
      -webkit-transition: height .5s;
      transition: height .5s;
    }
  `]
})
export class CollapseComponent implements OnInit {
  private height:number = 0;
  constructor() { }

  ngOnInit() {
  }

}
