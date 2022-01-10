import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anime-home',
  templateUrl: './anime-home.component.html',
  styleUrls: ['./anime-home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AnimeHomeComponent implements OnInit {

fond = "https://1.bp.blogspot.com/-aKZruCXLefo/XZzXbp9aiYI/AAAAAAAAE_c/aWT7xkIV248JUy1DkfPw6Z884kjdyBH0QCLcBGAsYHQ/s1600/832273-download-free-cool-pc-backgrounds-1920x1200-for-windows.jpg"
  
constructor(config: NgbCarouselConfig) { 
  config.interval = 5000;
   }

  ngOnInit(): void {
  }

  

}

