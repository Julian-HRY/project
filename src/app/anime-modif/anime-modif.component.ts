import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime/anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-modif',
  templateUrl: './anime-modif.component.html',
  styleUrls: ['./anime-modif.component.scss']
})
export class AnimeModifComponent implements OnInit {

  anime: any = null;
  change:boolean = false;
  vide:boolean = false;

  constructor(
    private Animes: AnimeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Animes.get(id).subscribe((value: any) => {
      this.anime = value;
    });
  }

  modif() {
    let InputFields = document.getElementsByTagName('input');
    let countInput = 0;


    for (let i = 0; i < InputFields.length; i++) {
      if (InputFields[i].value != '' && InputFields[i].type == 'text') {
        countInput++;
        InputFields[i].className = 'form-control'
      }else if (InputFields[i].value == '' && InputFields[i].type == 'text') {
        InputFields[i].className = 'form-control is-invalid'
      }
    }


    if (countInput == InputFields.length-4) {

      if (this.anime.Finish == true) {
        
        this.anime.Statut = 'Terminé';
      }
      else{
        this.anime.Statut = 'En cours'
      }

      this.Animes.update(this.anime).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        document.location.href="http://localhost:4200/Animes";
      }, 3000);
      })
      
    }
    else{
      this.vide = true;
      setTimeout(() => {
        this.vide = false;
      }, 3000);
    }

    
    
  }
}
