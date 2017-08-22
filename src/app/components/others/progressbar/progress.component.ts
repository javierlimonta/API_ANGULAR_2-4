import { Component, OnInit } from '@angular/core';
import {NgProgressService} from 'ngx-progressbar';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  constructor(public progressService: NgProgressService) {

  }


  ngOnInit() {
    this.progressService.start();
    setTimeout(() => {
      this.progressService.done();
    },5000);
  }

}
