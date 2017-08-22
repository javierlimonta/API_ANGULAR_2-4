import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from '../global/shared.module';
import {
  DatepickerModule, DatepickerConfig, TooltipModule, PopoverModule, PaginationModule, RatingModule, TabsModule,
  ProgressbarModule, CollapseModule, TimepickerModule, AccordionModule, BsDropdownModule, CarouselModule
} from 'ngx-bootstrap';

import {BootstrapComponent} from './bootstrap.component';
import {DatepickerComponent} from './bootstrap/datepicker/datepicker.component';
import {TooltipComponent} from './bootstrap/tooltip/tooltip.component';
import {PopoverComponent} from './bootstrap/popover/popover.component';
import {PaginationComponent} from './bootstrap/pagination/pagination.component';
import {RatingComponent} from './bootstrap/rating/rating.component';
import {TabBootstrapComponent} from './bootstrap/tab-bootstrap/tab-bootstrap.component';
import {ProgressbarComponent} from './bootstrap/progressbar/progressbar.component';
import {CollapseComponent} from './bootstrap/collapse/collapse.component';
import {TimeComponent} from './bootstrap/time/time.component';
import {AccordionComponent} from './bootstrap/accordion/accordion.component';
import {DropdownComponent} from './bootstrap/dropdown/dropdown.component';
import {CaruselComponent} from './bootstrap/carusel/carusel.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, FormsModule,
    DatepickerModule.forRoot(), TooltipModule.forRoot(), PopoverModule.forRoot(), PaginationModule.forRoot(),
    RatingModule.forRoot(), TabsModule.forRoot(), ProgressbarModule.forRoot(), CollapseModule.forRoot(),
    TimepickerModule.forRoot(), AccordionModule.forRoot(), BsDropdownModule.forRoot(), CarouselModule.forRoot()
  ],
  declarations: [BootstrapComponent, DatepickerComponent, TooltipComponent, PopoverComponent, PaginationComponent, RatingComponent
    , TabBootstrapComponent, ProgressbarComponent, CollapseComponent, TimeComponent, AccordionComponent, DropdownComponent
    , CaruselComponent],
  exports: [BootstrapComponent, DatepickerComponent, TooltipComponent, PopoverComponent, PaginationComponent, RatingComponent,
    TabBootstrapComponent, ProgressbarComponent, CollapseComponent, TimeComponent, AccordionComponent, DropdownComponent
    , CaruselComponent],
  providers: [DatePipe, DatepickerConfig]
})
export class ComponentModule {
}
