import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.component.html',
  styleUrls: ['./favori.component.scss']
})
export class FavoriComponent implements OnInit {
  animes!:any;
  @Input() id?: string;
  @Input() title?: string;

  @Input() Autor?: string;
  @Input() studio?: string;
  
  @Input() NB_Saison?: string;
  @Input() Nb_episode?: string;

  @Input() Nb_stars?: string;
  @Input() genre?: string;

  @Input() sortie?: string;
  @Input() Finish?: boolean;

  
  @Input() pictureLink?: string;
  
  @Input() onVF?: boolean;
  @Input() Resum?: string;
  
  @Input() fav?: boolean;
  
  // @Input() MainCarac?: string;
  // @Input() PPlink?: string;
  // @Input() onWAK?: boolean;


  @Input() Perso1?: string;
  @Input() Perso2?: string;
  @Input() Perso3?: string;
  @Input() Perso4?: string;
  
  @Input() PersoLink1?: string;
  @Input() PersoLink2?: string;
  @Input() PersoLink3?: string;
  @Input() PersoLink4?: string;

  @Input() PersoAudio1?: string;
  @Input() PersoAudio2?: string;
  @Input() PersoAudio3?: string;
  @Input() PersoAudio4?: string;

  @Input() display?: boolean;

  constructor(private Anime: AnimeService,private route: ActivatedRoute) { }

  anime: any = null;

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (this.Anime.get(id).fav == true) {
      this.Anime.get(id).subscribe((value: any) => {
      
      
        this.anime = value;
        console.log(value)
      });
    }
    }
    

}
