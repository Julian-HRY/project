import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animes!:any;

  constructor(private anime:AnimeService) { }

  ngOnInit(): void {
    this.anime.getAllAnimes().subscribe((data: any) => {
      this.animes = data;
    });
  }

  AfficheVOSTFR(){
    for (let index = 0; index < this.animes.length; index++) {
      this.animes[index].display = true;
      if(this.animes[index].onVF != true){
        this.animes[index].display = false;
      }
      
    }
  }

  AfficheTous(){
    for (let index = 0; index < this.animes.length; index++) {
      if(this.animes[index].display != true){
        this.animes[index].display = true;
      }
      this.ngOnInit();
    }
  }

  AfficheVO(){
    for (let index = 0; index < this.animes.length; index++) {
      this.animes[index].display = true;
      if(this.animes[index].onVF != false){
        this.animes[index].display = false;
      }
      
    }
  }

}
