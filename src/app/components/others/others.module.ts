import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../global/shared.module';
import {NgProgressModule} from 'ngx-progressbar';
import {ContextMenuModule} from 'ngx-contextmenu';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ProgressComponent} from './progressbar/progress.component';
import {OthersComponent} from './others.component';
import {ContextMEComponent} from './contextmenu/contextmenu.component';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
  imports: [FormsModule,BrowserAnimationsModule, CommonModule, NgProgressModule, SharedModule, ContextMenuModule,ToastrModule.forRoot()],
  declarations: [OthersComponent, ProgressComponent, ContextMEComponent, ToastrComponent],
  exports: [OthersComponent]
})
export class OthersModule {
}
