import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeHomeComponent } from './anime-home/anime-home.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeModifComponent } from './anime-modif/anime-modif.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';
import { FavoriComponent } from './favori/favori.component';

const routes: Routes = [
  {
    path: 'Animes',
    component: AnimeListComponent
  },
  {
    path: 'new',
    component: AnimeNewComponent
  },
  {
    path: '',
    component: AnimeHomeComponent
  },
  {
    path: 'modif/:id',
    component: AnimeModifComponent
  },
  {
    path: 'favori',
    component: FavoriComponent
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
