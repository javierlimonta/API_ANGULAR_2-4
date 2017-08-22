import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequireComponent} from './require.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequireComponent],
  exports: [RequireComponent]
})
export class GlobalModule {
}
