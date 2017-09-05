import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-visitor',
  template: `
    <p>
      first-visitor Works!
      {{numero}}
    </p>
  `,
  styles: []
})
export class FirstVisitorComponent implements OnInit {
  numero: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
