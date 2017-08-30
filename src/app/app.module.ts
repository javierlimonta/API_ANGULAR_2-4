import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TabsModule} from 'ngx-bootstrap';
import {ComponentModule} from './components/bootstrap.module';
import {OthersModule} from './components/others/others.module';
import {AngularModule} from './components/angular/angular.module';
import {Angular2Module} from './components/angular2/angular2.module';

import {AppComponent} from './app.component';
import {NuevoModule} from './nuevo/nuevo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, TabsModule.forRoot(), ComponentModule, OthersModule, AngularModule, Angular2Module, NuevoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
