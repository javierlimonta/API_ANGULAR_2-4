import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../global/shared.module';
import {SelectModule} from 'ng2-select';
import {ChartsModule} from 'ng2-charts';

import {Angular2Component} from './angular2.component';
import {SelectComponent} from './select/select.component';
import {RichComponent} from './select/rich.component';
import {MultipleComponent} from './select/multiple.component';
import {SimpleComponent} from './select/simple.component';
import {ChildrenComponent} from './select/children.component';
import {ChartsComponent} from './charts/charts.component';
import {LineComponent} from './charts/line/line.component';
import {BarComponent} from './charts/bar/bar.component';
import {PieComponent} from './charts/pie/pie.component';



@NgModule({
  imports: [
    CommonModule, ButtonsModule.forRoot(), FormsModule, SharedModule, SelectModule, ChartsModule
  ],
  declarations: [Angular2Component, SelectComponent, RichComponent, MultipleComponent, SimpleComponent, ChildrenComponent
    , ChartsComponent, LineComponent, BarComponent, PieComponent],
  exports: [Angular2Component],
})
export class Angular2Module {
}
