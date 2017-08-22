import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-bootstrap',
  templateUrl: './tab-bootstrap.component.html',
  styles: []
})
export class TabBootstrapComponent implements OnInit {

  constructor() {
  }

  seletedTab(tab: any): void {
    console.log(tab);
  }

  ngOnInit() {
  }

}
