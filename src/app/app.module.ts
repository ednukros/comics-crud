import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComicComponent } from './pages/add-comic/add-comic.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { ComicsDetailComponent } from './pages/comics-detail/comics-detail.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { EditComicComponent } from './pages/edit-comic/edit-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComicComponent,
    ComicsComponent,
    ComicsDetailComponent,
    NavComponent,
    HomeComponent,
    EditComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
