import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComicComponent } from './pages/add-comic/add-comic.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicsDetailComponent } from './pages/comics-detail/comics-detail.component';
import { NavComponent } from './shared/components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComicComponent,
    ComicsComponent,
    ComicsDetailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
