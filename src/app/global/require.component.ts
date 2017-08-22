import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-require',
    template: `
    <div [ngSwitch]="module">
    <ng-template [ngSwitchCase]="'ngx'"><b><small>required node-module<br><i class="font-red">deprecated (ng2-bootstrap)
    </i><i class="font-strongblue"> ngx-bootstrap</i></small></b></ng-template>
    <ng-template [ngSwitchCase]="'base'"><b><small>required node-module&nbsp;<i class="font-strongblue"> {{name}} </i>
    </small></b></ng-template>
    <ng-template *ngSwitchDefault></ng-template>
    </div>
    <br>
  `,
    styles: []
})
export class RequireComponent implements OnInit {
    @Input() module:string = "ngx";
    @Input() name:string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
