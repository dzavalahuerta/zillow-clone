import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';

const routes = [
  { path: "", component: HomePageComponent },
  { path: "test", component:BuyPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BuyPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
