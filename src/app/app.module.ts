import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TabsModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {ComponentModule} from './components/bootstrap.module';
import {OthersModule} from './components/others/others.module';
import {AngularModule} from './components/angular/angular.module';
import {Angular2Module} from './components/angular2/angular2.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TabsModule.forRoot(), ComponentModule, OthersModule, AngularModule, Angular2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
