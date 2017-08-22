import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../global/shared.module';
import {NgProgressModule} from 'ngx-progressbar';
import {ContextMenuModule} from 'ngx-contextmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ProgressComponent} from './progressbar/progress.component';
import {OthersComponent} from './others.component';
import {ContextMEComponent} from './contextmenu/contextmenu.component';

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, NgProgressModule, SharedModule, ContextMenuModule],
  declarations: [OthersComponent, ProgressComponent, ContextMEComponent],
  exports: [OthersComponent]
})
export class OthersModule {
}
