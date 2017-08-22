import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {FormsModule} from '@angular/forms';
import {TreeModule} from 'angular-tree-component';
import {CalendarModule} from 'angular-calendar';

import {AngularComponent} from './angular.component';
import {ConfirmPopoverComponent} from './confirm-popover/confirm-popover.component';
import {SharedModule} from '../../global/shared.module';
import {AngularTreeComponent} from './angular-tree/angular-tree.component';
import {CalendarioComponent} from './calendario/calendario.component';

@NgModule({
  imports: [
    CommonModule, ConfirmationPopoverModule.forRoot(), FormsModule, SharedModule, TreeModule, CalendarModule.forRoot()
  ],
  declarations: [AngularComponent, ConfirmPopoverComponent, AngularTreeComponent, CalendarioComponent],
  exports: [AngularComponent]
})
export class AngularModule {
}
