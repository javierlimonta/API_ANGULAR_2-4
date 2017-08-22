import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styles: []
})
export class ProgressbarComponent implements OnInit {
  private max:number = 100;
  private dynamic:number = 50;

  constructor() {
  }

  ngOnInit() {
  }

}
