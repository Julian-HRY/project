import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-favori-list',
  templateUrl: './favori-list.component.html',
  styleUrls: ['./favori-list.component.scss']
})
export class FavoriListComponent implements OnInit {

  animes!:any;

  constructor(private anime:AnimeService) { }

  ngOnInit(): void {
    this.anime.getAllAnimes().subscribe((data: any) => {
      this.animes = data;
      
    });
  }

}
