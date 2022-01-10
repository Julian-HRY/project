import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';

import { FormsModule } from '@angular/forms';
import { AnimeService } from './services/anime/anime.service';

import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeModifComponent } from './anime-modif/anime-modif.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';
import { AnimeHomeComponent } from './anime-home/anime-home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireStorageModule } from '@angular/fire/storage';
import { FavoriComponent } from './favori/favori.component';
import { FavoriListComponent } from './favori-list/favori-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AnimeListComponent,
    AnimeModifComponent,
    AnimeNewComponent,
    AnimeHomeComponent,
    FavoriComponent,
    FavoriListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireStorageModule,
    NgbModule
  ],
  providers: [
    AnimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
