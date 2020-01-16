import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';





// 2.
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
