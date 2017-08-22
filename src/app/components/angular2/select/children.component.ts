import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-children',
    template: `
    <div class="selectivity-input example-input"
     style="width: 300px; margin-bottom: 20px;">
  <h3>Select a city by country</h3>
  <ng-select [allowClear]="true"
             [items]="items"
             [disabled]="disabled"
             (data)="refreshValue($event)"
             (selected)="selected($event)"
             (removed)="removed($event)"
             placeholder="No city selected"></ng-select>
  <p></p>
  <pre>{{value.text}}</pre>
  <div>
    <button type="button" class="btn btn-primary"
            [(ngModel)]="disabledV" btnCheckbox
            btnCheckboxTrue="1" btnCheckboxFalse="0">
      {{disabled === '1' ? 'Enable' : 'Disable'}}
    </button>
  </div>
</div>
  `,
    styles: []
})
export class ChildrenComponent implements OnInit {
    public items:Array<any> = [
        {
            id: 111, text: 'Austria',
            children: [
                {id: 54, text: 'Vienna'}
            ]
        },
        {
            text: 'Belgium',
            id: 112,
            children: [
                {id: 2, text: 'Antwerp'},
                {id: 9, text: 'Brussels'}
            ]
        },
        {
            id: 113,
            text: 'Bulgaria',
            children: [
                {id: 48, text: 'Sofia'}
            ]
        },
        {
            id: 114,
            text: 'Croatia',
            children: [
                {id: 58, text: 'Zagreb'}
            ]
        },
        {
            id: 115,
            text: 'Spain',
            children: [
                {id: 4, text: 'Barcelona'},
                {id: 32, text: 'Madrid'},
                {id: 33, text: 'Málaga'},
                {id: 46, text: 'Seville'},
                {id: 53, text: 'Valencia'},
                {id: 59, text: 'Zaragoza'}
            ]
        }];
    private value:any = {};
    private _disabledV:string = '0';
    private disabled:boolean = false;

    private get disabledV():string {
        return this._disabledV;
    }

    private set disabledV(value:string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selected(value:any):void {
        console.log('Selected value is: ', value);
    }

    public removed(value:any):void {
        console.log('Removed value is: ', value);
    }

    public refreshValue(value:any):void {
        this.value = value;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
