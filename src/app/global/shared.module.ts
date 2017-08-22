import {NgModule} from '@angular/core';
import {GlobalModule} from './global.module';

@NgModule({
  exports: [GlobalModule]
})
export class SharedModule {
}
