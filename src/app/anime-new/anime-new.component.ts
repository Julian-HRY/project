import { Component, Directive, OnInit } from '@angular/core';
import { Animes } from '../models/animes.model';
import { AnimeService } from '../services/anime/anime.service';
import {AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-anime-new',
  templateUrl: './anime-new.component.html',
  styleUrls: ['./anime-new.component.scss']
})
export class AnimeNewComponent implements OnInit {

  public anime !: Animes;
  private path !: string;
  change:boolean = false;
  vide:boolean = false;
  private fileToUpload: File | null = null;
  

  constructor(private Anime : AnimeService, private af:AngularFireStorage) {
    
   }

  ngOnInit(): void {
    this.anime = new Animes(); 
  }

  add(){
    let InputFields = document.getElementsByTagName('input');
    let countInput = 0;

    console.log(InputFields);

    for (let i = 0; i < InputFields.length; i++) {
      if (InputFields[i].value != '' && InputFields[i].type == 'text') {
        countInput++;
        InputFields[i].className = 'form-control'
      }else if (InputFields[i].value == '' && InputFields[i].type == 'text') {
        InputFields[i].className = 'form-control is-invalid'
      }
      console.log(InputFields[i].value);
    }

  //verification
    if (countInput == InputFields.length-4) {

      if (this.anime.Finish == true) {
        
        this.anime.Statut = 'Terminé';
        console.log(this.anime.Statut)
      }
      else{
        this.anime.Statut = 'En cours'
      }

    this.Anime.saveNewAnime(this.anime).subscribe(()=>{
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
