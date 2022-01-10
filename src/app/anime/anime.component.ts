import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  
  @Input() id?: string;
  @Input() title?: string;

  @Input() Autor?: string;
  @Input() studio?: string;
  
  @Input() NB_Saison?: string;
  @Input() Nb_episode?: string;

  @Input() Nb_stars = 0;
  @Input() genre?: string;

  @Input() sortie?: string;
  @Input() Finish?: boolean;

  @Input() Statut?: string;
  
  @Input() pictureLink?: string;
  
  @Input() onVF?: boolean;
  @Input() Resum?: string;
  
  @Input() display?: boolean;
  

  anime: any = null;
  change:boolean = false;

  numbers = [1,2,3,4,5];

  constructor(private Anime: AnimeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Anime.get(id).subscribe((value: any) => {
      
      this.anime = value;
    });
  }

  getOnVF() {
    return this.onVF;
  }

  onWatchFilm() {
    console.log('Je regarde cet animé');
  }

  changeColor() {
    return this.onVF ? 'purple' : 'red';
  }

  suppr():void {
    this.Anime.delete(this.id);
    console.log(this.id)
  }


}
