import {Component, OnInit, ViewChild} from '@angular/core';
import {ContextMenuComponent, ContextMenuService} from 'ngx-contextmenu';
@Component({
    selector: 'app-contextmenu',
    styleUrls: ['./contextmenu.component.css'],
    templateUrl: './contextmenu.component.html'
})
export class ContextMEComponent implements OnInit {

    public items:any[] = [
        {
            name: 'John',
            otherProperty: {id: 1, color: 'green'},
            layout: {
                height: 90,
                left: 0,
                top: 0,
                width: 98,
            },
            actions: [{
                enabled: true,
                execute: (item:any):void => console.log(item),
                html: (item:any):string => `John custom 1 : ${item.name}`,
                visible: true,
            }, {
                divider: true,
                visible: true,
            }, {
                enabled: true,
                execute: (item:any):void => console.log(item),
                html: (item:any):string => `John custom 2: ${item.name}`,
                visible: true,
            }],
        },
        {
            name: 'Joe',
            otherProperty: 'Bar',
            layout: {
                height: 90,
                left: 98,
                top: 0,
                width: 98,
            },
            actions: [{
                enabled: true,
                execute: (item:any):void => console.log(item),
                html: (item:any):string => `Joe something: ${item.name}`,
                visible: true,
            }],
        },
    ];
    public outsideValue:string = 'something';

    @ViewChild('basicMenu') public basicMenu:ContextMenuComponent;
    @ViewChild('enableAndVisible') public enableAndVisible:ContextMenuComponent;
    @ViewChild('withFunctions') public withFunctions:ContextMenuComponent;

    constructor(private contextMenuService:ContextMenuService) {
    }

    ngOnInit() {
    }

    public onContextMenu($event:MouseEvent, item:any):void {
        this.contextMenuService.show.next({event: $event, item: item});
        $event.preventDefault();
    }

    public showMessage(message:any):void {
        console.log(message);
    }

    public onlyJohn(item:any):boolean {
        return item.name === 'John';
    }

    public onlyJoe(item:any):boolean {
        return item.name === 'Joe';
    }

}
