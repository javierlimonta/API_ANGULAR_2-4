import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NuevoComponent} from './nuevo.component';
import {FirstVisitorComponent} from './first-visitor.component';
import {SecondVisitorComponent} from './second-visitor.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [NuevoComponent, FirstVisitorComponent, SecondVisitorComponent],
  exports: [NuevoComponent],
  entryComponents: [FirstVisitorComponent, SecondVisitorComponent]
})
export class NuevoModule {
}
