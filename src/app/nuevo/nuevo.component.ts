import {Component, OnInit} from '@angular/core';
import {FirstVisitorComponent} from './first-visitor.component';
import {SecondVisitorComponent} from './second-visitor.component';
import {isComponentView} from "@angular/core/src/view/util";


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html'
})
export class NuevoComponent implements OnInit {
  public wellcome;
  public check: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.wellcome = FirstVisitorComponent;
  }

  getComponent() {
    if (this.wellcome === (FirstVisitorComponent)) {
      this.wellcome = SecondVisitorComponent;
    } else {
      this.wellcome = FirstVisitorComponent;
    }
  }

}

