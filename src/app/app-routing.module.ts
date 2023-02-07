import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComicComponent } from './pages/add-comic/add-comic.component';
import { ComicsDetailComponent } from './pages/comics-detail/comics-detail.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { EditComicComponent } from './pages/edit-comic/edit-comic.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'add-comic', component: AddComicComponent },
  { path: 'comic/:id', component: ComicsDetailComponent },
  { path: 'edit', component: EditComicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
